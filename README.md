# Cloudflare Smart IP

[![Test and Update DNS](https://github.com/FutureUnreal/Cloudflare-Smart-IP/actions/workflows/update-worker.yml/badge.svg)](https://github.com/FutureUnreal/Cloudflare-Smart-IP/actions/workflows/update-worker.yml)

A tool for testing and selecting optimal Cloudflare IPs. It tests Cloudflare Anycast IPs (1.1.1.0/24 and 1.0.0.0/24) using ITDOG testing nodes from different Chinese ISPs, and automatically updates the Cloudflare Worker configuration based on test results.

[English](#english) | [简体中文](./README_CN.md)

## ✨ Features

- 🚀 Automatic Cloudflare IP quality testing using ITDOG nodes
- 📊 Multi-ISP testing using nodes from different regions
- 🔄 Automatic Worker configuration updates
- 🌐 Support for China Telecom, Unicom, and Mobile
- ⚡ Built-in rate limiting and error handling
- 🔍 Detailed test logs
- 🤖 GitHub Actions support for automated testing

## 🚀 Quick Start

### GitHub Actions Setup

1. Fork this repository

2. Add repository secrets:
   - Go to your repository's `Settings` > `Secrets and variables` > `Actions`
   - Add the following secrets:
```
CF_ACCOUNT_ID    # Your Cloudflare Account ID
CF_API_TOKEN     # Your Cloudflare API Token with Worker permissions
CF_WORKER_NAME   # Your Worker name
```

3. Enable GitHub Actions:
   - Go to `Actions` tab in your repository
   - Enable workflows if they're disabled
   - The test will run automatically according to the schedule in `.github/workflows/update-worker.yml`

### Local Testing

1. Clone the repository:
```bash
git clone https://github.com/yourusername/cloudflare-smart-ip.git
cd cloudflare-smart-ip
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Configure settings
   - Update `config/settings.json` and `config/ip_ranges.json`
   - See [Configuration](#%EF%B8%8F-configuration) section for details

4. Run the test:
```bash
python -m src.main
```

## ⚙️ Configuration

### IP Range Configuration (config/ip_ranges.json)
```json
{
  "ip_ranges": [
    {
      "prefix": "1.0.0",    // First three segments of IP
      "start": 2,           // Starting value of last segment
      "end": 255           // Ending value of last segment
    },
    {
      "prefix": "1.1.1",
      "start": 2,
      "end": 255
    }
  ],
  "skip_ips": [            // IPs to skip
    "1.1.1.1",
    "1.0.0.1"
  ]
}
```

### Main Configuration (config/settings.json)
```json
{
  "test_timeout": 10,        // Test timeout in seconds
  "min_request_interval": 3, // Minimum interval between requests
  "retry_delay": 10,        // Delay before retrying failed requests
  "nodes_per_test": 1,      // Number of nodes to test per ISP
  "ips_per_region": 20,     // Number of IPs to keep per region
  "sample_rate": 0.1,       // IP sampling rate (0.1 = test 10% of IPs)
  
  "regions": ["EAST", "SOUTH", "NORTH", "CENTRAL", "SOUTHWEST", "NORTHWEST", "NORTHEAST"],
  "isps": ["CHINA_TELECOM", "CHINA_UNICOM", "CHINA_MOBILE"],
  
  "cloudflare": {
    "account_id": "",       // Your Cloudflare Account ID
    "api_token": "",        // Your API Token
    "worker_name": ""       // Your Worker name
  },
  
  "NODE_MAPPING": {
    "CHINA_TELECOM": {
      "EAST": ["1227", "1312"],      // Shanghai, Jiangsu
      "SOUTH": ["1169", "1135"],     // Guangdong, Hainan
      "NORTH": ["1310", "1132"],     // Beijing, Tianjin
      "CENTRAL": ["1214", "1311"],   // Hubei, Hunan
      "SOUTHWEST": ["1138", "1304"], // Chongqing, Sichuan
      "NORTHWEST": ["1124", "1127"], // Xinjiang, Gansu
      "NORTHEAST": ["1168", "1129"]  // Liaoning, Jilin
    },
    "CHINA_UNICOM": {
      // Similar structure as CHINA_TELECOM
    },
    "CHINA_MOBILE": {
      // Similar structure as CHINA_TELECOM
    }
  }
}
```

### Parameter Details

1. **Testing Parameters**
   - `test_timeout`: Maximum wait time for each IP test
   - `min_request_interval`: Minimum interval between test requests
   - `retry_delay`: Wait time before retrying failed requests
   - `nodes_per_test`: Number of random nodes to use for testing per ISP
   - `ips_per_region`: Number of best IPs to keep per region
   - `sample_rate`: IP sampling rate for controlling test size

2. **Regions and ISPs**
   - `regions`: List of supported regions for IP categorization
   - `isps`: List of supported ISPs for test differentiation

3. **Cloudflare Configuration**
   - `account_id`: Your Cloudflare account ID
   - `api_token`: API token with Worker management permissions
   - `worker_name`: Name of the Worker to update

4. **Node Configuration**
   - `NODE_MAPPING`: Detailed node ID mapping table
   - Each ISP contains node lists for 7 regions
   - Node IDs correspond to ITDOG test nodes

### Configuration Recommendations

1. **Sampling Rate**
   - First test: 0.1 (test 10% of IPs)
   - Complete test: 0.2 (test 20% of IPs)
   - Quick test: 0.05 (test 5% of IPs)

2. **Time Intervals**
   - Normal use: min_request_interval=3, retry_delay=10
   - Aggressive testing: min_request_interval=2, retry_delay=5
   - Conservative testing: min_request_interval=5, retry_delay=15

3. **Node Count**
   - Recommended nodes_per_test=1 (one random node per ISP)
   - Set to 2 or 3 for more accurate results but longer test time

4. **IP Count**
   - ips_per_region=20 is usually sufficient
   - Adjust based on needs, but recommend not less than 10

Note: All time-related configurations are in seconds. Consider ITDOG's request limits when adjusting these parameters to avoid triggering anti-crawling mechanisms.

## 📊 Results

After each run, you can find:
- `results/test_results_latest.json`: Latest test results
- `results/ip_pools_latest.json`: Latest IP pool configuration
- `results/worker_latest.js`: Latest Worker configuration

## 🌟 Testing Nodes

The tool uses ITDOG testing nodes from:

- China Telecom:
  - East China (Shanghai, Jiangsu)
  - South China (Guangdong, Hainan)
  - North China (Beijing, Tianjin)
  - And more regions...

- China Unicom:
  - Similar regional coverage as Telecom

- China Mobile:
  - Similar regional coverage as Telecom

## 📃 License

[MIT License](./LICENSE)