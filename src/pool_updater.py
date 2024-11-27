import json
from pathlib import Path
from datetime import datetime
from typing import Dict
from .utils import setup_logging

class PoolUpdater:
    def __init__(self, config: Dict):
        self.config = config
        self.logger = setup_logging('pool_updater')
        self.results_dir = Path('results')
        
        # 初始化IP池结构
        self.ip_pools = {
            isp: {region: [] for region in config['regions']}
            for isp in config['isps']
        }

        # ISP名称映射
        self.isp_mapping = {
            'TELECOM': 'CHINA_TELECOM',
            'UNICOM': 'CHINA_UNICOM',
            'MOBILE': 'CHINA_MOBILE'
        }

    def load_test_results(self) -> Dict:
        """加载最新的测试结果"""
        try:
            result_files = list(self.results_dir.glob('test_results_*.json'))
            if not result_files:
                raise FileNotFoundError("没有找到测试结果文件")
                
            latest_file = max(result_files, key=lambda x: x.stat().st_mtime)
            
            with open(latest_file) as f:
                return json.load(f)
        except Exception as e:
            self.logger.error(f"加载测试结果失败: {str(e)}")
            return None

    def update(self) -> Dict:
        """更新IP池配置"""
        results = self.load_test_results()
        if not results:
            self.logger.error("没有可用的测试结果")
            return self.ip_pools

        # 清空当前IP池
        for isp in self.ip_pools:
            for region in self.ip_pools[isp]:
                self.ip_pools[isp][region] = []

        # 按ISP和区域组织IP和延迟数据
        organized_data = {
            isp: {region: [] for region in self.ip_pools[isp]}
            for isp in self.ip_pools
        }

        # 处理每个IP的测试结果
        for result in results:
            if result['status'] != 'ok':
                continue

            ip = result['ip']
            for isp_short, test_data in result['tests'].items():
                # 转换ISP名称
                full_isp = self.isp_mapping.get(isp_short)
                if not full_isp:
                    continue

                # 只处理有效的测试结果
                if (isinstance(test_data, dict) and 
                    test_data.get('available') and 
                    test_data.get('latency', float('inf')) < float('inf')):

                    node_id = test_data.get('node_id')
                    region = self._get_region_by_node(full_isp, node_id)
                    
                    if region:
                        # 记录IP和延迟
                        organized_data[full_isp][region].append({
                            'ip': ip,
                            'latency': test_data['latency']
                        })

        # 对每个区域的IP进行排序和限制
        max_ips = 5  # 每个区域最多保留5个IP
        for isp in organized_data:
            for region in organized_data[isp]:
                # 按延迟排序
                sorted_ips = sorted(
                    organized_data[isp][region],
                    key=lambda x: x['latency']
                )
                # 只保留延迟最低的5个IP
                self.ip_pools[isp][region] = [
                    item['ip'] for item in sorted_ips[:max_ips]
                ]
                
                if sorted_ips:
                    self.logger.info(
                        f"{isp} {region}: 保留 {len(self.ip_pools[isp][region])} 个IP，"
                        f"延迟范围 {sorted_ips[0]['latency']:.1f}ms - "
                        f"{sorted_ips[min(max_ips-1, len(sorted_ips)-1)]['latency']:.1f}ms"
                    )

        self.save_results()
        return self.ip_pools

    def _get_region_by_node(self, isp: str, node_id: str) -> str:
        """根据节点ID获取区域"""
        node_mapping = self.config.get('NODE_MAPPING', {})
        if isp in node_mapping:
            for region, nodes in node_mapping[isp].items():
                if node_id in nodes:
                    return region
        return None  # 如果找不到对应区域则返回None

    def _get_ip_latency(self, ip: str, results: list[Dict], isp: str) -> float:
        """获取特定IP在指定运营商的延迟"""
        for result in results:
            if result['ip'] == ip and 'tests' in result:
                short_isp = next(k for k, v in self.isp_mapping.items() if v == isp)
                if short_isp in result['tests']:
                    return result['tests'][short_isp].get('latency', float('inf'))
        return float('inf')

    def save_results(self):
        """保存IP池配置"""
        timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
        
        # 确保结果目录存在
        self.results_dir.mkdir(exist_ok=True)
        
        # 保存当前配置
        with open(self.results_dir / f'ip_pools_{timestamp}.json', 'w') as f:
            json.dump(self.ip_pools, f, indent=2)
        
        # 保存最新配置的副本
        with open(self.results_dir / 'ip_pools_latest.json', 'w') as f:
            json.dump(self.ip_pools, f, indent=2)
            
        self.logger.info("IP池配置已保存")