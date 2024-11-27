# Cloudflare Smart IP

[![Test and Update DNS](https://github.com/FutureUnreal/Cloudflare-Smart-IP/actions/workflows/update-worker.yml/badge.svg)](https://github.com/FutureUnreal/Cloudflare-Smart-IP/actions/workflows/update-worker.yml)

自动测试和优化 Cloudflare IP 的工具。使用来自不同中国运营商的 ITDOG 测速节点对 Cloudflare Anycast IP（1.1.1.0/24和1.0.0.0/24）进行网络质量测试，并自动更新 Cloudflare Worker 配置。

[English](./README.md) | [简体中文](#简体中文)

## ✨ 特性

- 🚀 使用 ITDOG 节点自动测试 Cloudflare IP 质量
- 📊 多运营商多地区节点测试
- 🔄 自动更新 Worker 配置
- 🌐 支持电信、联通、移动三大运营商
- ⚡ 内置请求限制和错误处理
- 🔍 详细的测试日志
- 🤖 支持 GitHub Actions 自动化测试

## 🚀 快速开始

### GitHub Actions 配置

1. Fork 本仓库

2. 添加仓库密钥：
   - 进入仓库的 `Settings` > `Secrets and variables` > `Actions`
   - 添加以下密钥：
```
CF_ACCOUNT_ID    # 你的 Cloudflare 账户 ID
CF_API_TOKEN     # 你的 Cloudflare API 令牌（需要有 Worker 权限）
CF_WORKER_NAME   # 你的 Worker 名称
```

3. 启用 GitHub Actions：
   - 进入仓库的 `Actions` 标签页
   - 如果 workflow 被禁用则启用它
   - 测试会根据 `.github/workflows/update-worker.yml` 中的调度自动运行

### 本地测试

1. 克隆仓库：
```bash
git clone https://github.com/yourusername/cloudflare-smart-ip.git
cd cloudflare-smart-ip
```

2. 安装依赖：
```bash
pip install -r requirements.txt
```

3. 配置设置
   - 更新 `config/settings.json` 和 `config/ip_ranges.json`
   - 详见[配置说明](#%EF%B8%8F-配置说明)部分

4. 运行测试：
```bash
python -m src.main
```

## ⚙️ 配置说明

### IP范围配置 (config/ip_ranges.json)
```json
{
  "ip_ranges": [
    {
      "prefix": "1.0.0",    // IP前三段
      "start": 2,           // 最后一段起始值
      "end": 255           // 最后一段结束值
    },
    {
      "prefix": "1.1.1",
      "start": 2,
      "end": 255
    }
  ],
  "skip_ips": [            // 要跳过的特定IP
    "1.1.1.1",
    "1.0.0.1"
  ]
}
```

### 主配置文件 (config/settings.json)
```json
{
  "test_timeout": 10,        // 单次测试超时时间（秒）
  "min_request_interval": 3, // 请求间隔（秒）
  "retry_delay": 10,        // 失败重试延迟（秒）
  "nodes_per_test": 1,      // 每个运营商测试的节点数
  "ips_per_region": 20,     // 每个区域保留的IP数量
  "sample_rate": 0.1,       // IP采样率（0.1表示测试10%的IP）
  
  "regions": ["EAST", "SOUTH", "NORTH", "CENTRAL", "SOUTHWEST", "NORTHWEST", "NORTHEAST"],
  "isps": ["CHINA_TELECOM", "CHINA_UNICOM", "CHINA_MOBILE"],
  
  "cloudflare": {
    "account_id": "",      // Cloudflare账户ID
    "api_token": "",       // API令牌
    "worker_name": ""      // Worker名称
  },
  
  "NODE_MAPPING": {
    "CHINA_TELECOM": {
      "EAST": ["1227", "1312"],      // 上海、江苏
      "SOUTH": ["1169", "1135"],     // 广东深圳、海南
      "NORTH": ["1310", "1132"],     // 北京、天津
      "CENTRAL": ["1214", "1311"],   // 湖北武汉、湖南长沙
      "SOUTHWEST": ["1138", "1304"], // 重庆、四川
      "NORTHWEST": ["1124", "1127"], // 新疆、甘肃
      "NORTHEAST": ["1168", "1129"]  // 辽宁、吉林
    },
    "CHINA_UNICOM": {
      // 结构同电信
    },
    "CHINA_MOBILE": {
      // 结构同电信
    }
  }
}
```

### 参数说明

1. **测试参数**
   - `test_timeout`: 每个IP测试的最大等待时间
   - `min_request_interval`: 两次测试请求之间的最小间隔时间
   - `retry_delay`: 请求失败后重试的等待时间
   - `nodes_per_test`: 每个运营商随机选择用于测试的节点数量
   - `ips_per_region`: 每个区域保留的最优IP数量
   - `sample_rate`: IP采样率，用于控制测试IP的数量

2. **区域和运营商**
   - `regions`: 支持的区域列表，用于对IP进行区域划分
   - `isps`: 支持的运营商列表，用于区分不同运营商的测试结果

3. **Cloudflare配置**
   - `account_id`: Cloudflare账户ID
   - `api_token`: Cloudflare API令牌（需要有Worker管理权限）
   - `worker_name`: 要更新的Worker名称

4. **节点配置**
   - `NODE_MAPPING`: 详细的节点ID映射表
   - 每个运营商包含7个区域的节点列表
   - 节点ID对应ITDOG提供的测试节点

### 配置建议

1. **采样率设置**
   - 初次测试建议：0.1（测试10%的IP）
   - 完整测试建议：0.2（测试20%的IP）
   - 快速测试建议：0.05（测试5%的IP）

2. **时间间隔设置**
   - 正常使用：min_request_interval=3, retry_delay=10
   - 激进测试：min_request_interval=2, retry_delay=5
   - 保守测试：min_request_interval=5, retry_delay=15

3. **节点数量设置**
   - 建议 nodes_per_test=1，每个运营商使用一个随机节点
   - 如需更准确的结果可设置为2或3，但会显著增加测试时间

4. **IP数量设置**
   - ips_per_region=20 通常足够使用
   - 可根据需求适当增减，但建议不少于10个

注意：所有时间相关的配置单位均为秒。调整这些参数时需要考虑ITDOG的请求限制，避免触发反爬虫机制。

## 📊 测试结果

每次运行后可以查看：
- `results/test_results_latest.json`: 最新的测试结果
- `results/ip_pools_latest.json`: 最新的IP池配置
- `results/worker_latest.js`: 最新的Worker配置

## 🌟 测试节点

工具使用来自以下运营商的 ITDOG 测试节点：

- 中国电信：
  - 华东（上海、江苏）
  - 华南（广东、海南）
  - 华北（北京、天津）
  - 以及更多地区...

- 中国联通：
  - 覆盖地区与电信类似

- 中国移动：
  - 覆盖地区与电信类似

## 📃 许可证

[MIT 许可证](./LICENSE)
