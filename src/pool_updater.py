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

                # 只有当测试结果有效时才处理
                if (isinstance(test_data, dict) and
                    test_data.get('available') and
                    test_data.get('latency', float('inf')) < float('inf')):

                    # 根据节点ID确定区域
                    node_id = test_data.get('node_id')
                    region = self._get_region_by_node(full_isp, node_id)
                    
                    if region:
                        if ip not in self.ip_pools[full_isp][region]:
                            self.ip_pools[full_isp][region].append(ip)
                            self.logger.info(f"添加IP {ip} 到 {full_isp} {region}，延迟: {test_data['latency']}ms")

        # 对每个区域的IP进行排序和限制数量
        for isp in self.ip_pools:
            for region in self.ip_pools[isp]:
                # 根据延迟排序（如果有测试结果）
                self.ip_pools[isp][region].sort(
                    key=lambda x: self._get_ip_latency(x, results, isp)
                )
                # 限制每个区域的IP数量
                max_ips = self.config.get('ips_per_region', 20)
                self.ip_pools[isp][region] = self.ip_pools[isp][region][:max_ips]

        self.save_results()
        return self.ip_pools

    def _get_region_by_node(self, isp: str, node_id: str) -> str:
        """根据节点ID获取区域"""
        node_mapping = self.config.get('NODE_MAPPING', {})
        if isp in node_mapping:
            for region, nodes in node_mapping[isp].items():
                if node_id in nodes:
                    return region
        return "EAST"  # 默认返回EAST，或者可以返回None

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