// IP池配置 - 更新时间: 2024-11-30T19:13:22.620567
const IP_POOLS = {
  "CHINA_TELECOM": {
    "EAST": [
      "104.18.137.140",
      "104.17.238.170",
      "104.18.31.181",
      "104.22.20.250",
      "172.67.35.93",
      "104.17.69.150",
      "172.67.23.158",
      "172.65.61.215",
      "172.67.242.10",
      "104.17.100.228",
      "104.20.27.155",
      "104.21.5.140",
      "104.20.162.75",
      "104.27.98.34",
      "104.24.37.123",
      "104.25.89.30",
      "104.16.25.33",
      "172.66.212.3",
      "172.65.75.247",
      "104.24.205.250"
    ],
    "SOUTH": [
      "172.65.234.93",
      "104.19.99.15",
      "104.18.239.206",
      "104.16.147.227",
      "104.19.22.112",
      "104.16.163.98",
      "172.65.54.67",
      "104.21.203.253",
      "172.67.143.168",
      "104.25.34.90",
      "104.20.44.116",
      "104.21.11.86",
      "104.24.137.151",
      "104.27.19.61",
      "104.24.90.229",
      "104.20.155.30",
      "104.20.84.109",
      "172.67.53.140",
      "104.25.142.42",
      "104.24.37.152"
    ],
    "NORTH": [
      "104.17.14.146",
      "104.21.111.244",
      "172.67.134.236",
      "104.19.91.102",
      "104.21.58.71",
      "104.21.219.99",
      "104.16.231.238",
      "172.67.147.104",
      "104.21.100.185",
      "104.21.74.72",
      "172.67.248.62",
      "104.18.143.114",
      "104.18.107.208",
      "104.22.51.187",
      "172.67.108.9",
      "172.66.158.215",
      "172.67.5.115",
      "104.27.199.227",
      "104.24.221.218",
      "104.24.82.25"
    ],
    "CENTRAL": [
      "104.19.16.8",
      "104.17.188.233",
      "172.65.218.80",
      "104.21.225.194",
      "104.19.135.70",
      "104.18.66.119",
      "104.18.124.129",
      "103.21.246.187",
      "104.21.69.129",
      "104.21.104.195",
      "172.66.149.11",
      "104.19.235.52",
      "104.21.78.63",
      "172.65.188.116",
      "172.65.186.233",
      "172.67.93.102",
      "104.20.167.117",
      "104.24.79.143",
      "103.21.244.6",
      "172.65.175.206"
    ],
    "SOUTHWEST": [
      "104.16.195.86",
      "104.19.18.142",
      "104.17.51.189",
      "104.19.176.134",
      "104.19.77.224",
      "104.17.222.201",
      "172.65.56.164",
      "172.67.245.20",
      "104.24.38.208",
      "104.25.94.48",
      "104.20.137.84",
      "172.67.48.196",
      "172.67.73.26",
      "104.20.137.36",
      "104.25.233.225",
      "172.66.159.125",
      "104.20.232.162",
      "104.20.113.234",
      "104.24.130.54",
      "104.17.41.129"
    ],
    "NORTHWEST": [
      "104.16.183.7",
      "172.67.128.127",
      "104.21.11.144",
      "104.19.122.80",
      "172.65.238.20",
      "104.18.232.184",
      "104.17.70.26",
      "104.24.192.108",
      "104.18.30.198",
      "104.25.3.35",
      "104.24.37.51",
      "104.20.40.228",
      "104.27.71.93",
      "104.25.106.236",
      "172.65.174.105",
      "104.24.196.13",
      "104.24.244.123",
      "104.18.38.69",
      "104.16.161.234",
      "104.18.143.182"
    ],
    "NORTHEAST": [
      "104.19.166.38",
      "172.67.177.193",
      "172.67.202.102",
      "172.65.11.202",
      "104.21.57.15",
      "104.21.11.5",
      "104.21.205.18",
      "104.18.101.123",
      "104.18.161.77",
      "172.65.24.120",
      "104.19.196.143",
      "104.19.254.243",
      "104.20.136.171",
      "104.24.235.200",
      "104.24.224.107",
      "104.20.153.245",
      "104.22.73.5",
      "104.26.15.30",
      "104.24.190.155",
      "172.65.148.103"
    ]
  },
  "CHINA_UNICOM": {
    "EAST": [
      "104.16.231.238",
      "104.18.101.123",
      "104.19.176.134",
      "104.17.188.233",
      "104.21.225.194",
      "172.65.242.159",
      "172.65.11.202",
      "104.19.77.224",
      "104.19.254.243",
      "104.24.228.4",
      "104.17.100.228",
      "104.27.199.227",
      "104.18.66.119",
      "104.27.38.71",
      "172.66.159.125",
      "104.19.146.46",
      "104.25.34.90",
      "104.25.158.206",
      "172.67.53.140",
      "104.22.39.81"
    ],
    "SOUTH": [
      "104.27.122.142",
      "104.18.31.181",
      "172.67.248.62",
      "104.16.183.7",
      "104.16.195.86",
      "172.67.17.204",
      "104.16.147.227",
      "172.67.127.169",
      "104.21.58.71",
      "172.66.158.215",
      "104.18.232.184",
      "172.67.5.115",
      "104.27.98.34",
      "104.24.224.107",
      "103.21.244.6",
      "104.25.3.35",
      "104.27.79.189",
      "104.24.130.54",
      "104.25.17.58",
      "104.27.19.61"
    ],
    "NORTH": [
      "104.17.14.146",
      "104.18.239.206",
      "172.66.174.41",
      "104.20.188.192",
      "172.65.186.233",
      "104.21.11.86",
      "104.16.25.33",
      "104.20.136.171",
      "104.17.70.26",
      "172.65.175.206",
      "172.66.1.141",
      "104.25.3.250",
      "172.65.139.194",
      "104.20.232.162",
      "104.20.212.57",
      "104.24.223.143",
      "104.20.147.124",
      "104.16.161.234",
      "104.20.167.117",
      "104.16.9.106"
    ],
    "CENTRAL": [
      "104.24.36.111",
      "104.18.137.140",
      "104.21.205.18",
      "104.19.135.70",
      "104.19.22.112",
      "104.17.238.170",
      "104.18.143.114",
      "172.65.134.53",
      "172.65.54.67",
      "172.67.108.9",
      "104.21.5.140",
      "172.65.188.116",
      "104.17.51.189",
      "104.25.89.30",
      "104.22.73.5",
      "104.20.153.245",
      "172.65.218.80",
      "104.24.79.143",
      "172.67.73.26",
      "172.67.48.196"
    ],
    "SOUTHWEST": [
      "172.67.202.102",
      "104.16.163.98",
      "104.22.20.250",
      "104.17.222.201",
      "172.66.149.11",
      "104.20.44.116",
      "172.67.23.158",
      "104.24.137.151",
      "172.65.56.164",
      "172.67.93.102",
      "104.24.38.208",
      "104.24.82.25",
      "104.20.84.109",
      "104.19.91.102",
      "172.66.212.3",
      "172.65.148.103",
      "104.25.233.225",
      "104.20.42.145",
      "104.17.41.129",
      "104.24.244.123"
    ],
    "NORTHWEST": [
      "172.65.234.93",
      "104.18.161.77",
      "104.19.18.142",
      "104.19.166.38",
      "104.19.16.8",
      "172.67.242.10",
      "104.20.27.155",
      "104.21.69.129",
      "104.17.69.150",
      "104.19.99.15",
      "172.67.35.93",
      "104.24.215.0",
      "104.26.15.30",
      "104.22.51.187",
      "104.20.137.84",
      "172.65.75.247",
      "104.25.118.222",
      "104.24.37.152",
      "104.18.124.129",
      "104.24.205.250"
    ],
    "NORTHEAST": [
      "172.65.238.20",
      "104.24.80.211",
      "104.24.158.78",
      "104.20.155.30",
      "104.25.94.48",
      "104.24.190.155",
      "104.24.53.146",
      "104.24.237.49",
      "172.65.122.163",
      "172.65.174.105",
      "104.24.7.92"
    ]
  },
  "CHINA_MOBILE": {
    "EAST": [
      "172.67.127.169",
      "172.65.242.159",
      "172.66.174.41",
      "172.67.17.204",
      "104.24.228.4",
      "104.25.253.211",
      "104.24.221.218",
      "104.19.104.68",
      "104.24.196.13",
      "172.67.195.211"
    ],
    "SOUTH": [
      "104.20.188.192",
      "104.24.158.78",
      "172.66.199.20",
      "104.25.106.236"
    ],
    "NORTH": [
      "104.19.196.143",
      "104.22.37.207",
      "104.20.170.254",
      "104.24.37.51",
      "104.17.130.208",
      "104.19.200.216"
    ],
    "CENTRAL": [
      "104.22.60.90",
      "172.65.61.215",
      "104.21.74.72",
      "104.18.107.208",
      "172.66.1.141",
      "104.20.113.234"
    ],
    "SOUTHWEST": [
      "104.16.195.86",
      "104.27.122.142",
      "104.24.166.223",
      "104.24.235.200",
      "104.24.90.229",
      "104.22.40.162"
    ],
    "NORTHWEST": [
      "104.24.36.111"
    ],
    "NORTHEAST": [
      "104.19.122.80",
      "172.67.128.127"
    ]
  }
};

// ASN到运营商的映射
const ASN_TO_ISP = {
  // 电信
  '4134': 'CHINA_TELECOM',
  '4809': 'CHINA_TELECOM',
  // 联通
  '4837': 'CHINA_UNICOM', 
  '9929': 'CHINA_UNICOM',
  '4808': 'CHINA_UNICOM',
  // 移动
  '9808': 'CHINA_MOBILE',
  '56040': 'CHINA_MOBILE'
};

// 区域列表
const REGIONS = [
  'EAST',
  'NORTH', 
  'SOUTH',
  'CENTRAL',
  'SOUTHWEST',
  'NORTHWEST',
  'NORTHEAST'
];

// 错误类型定义
const ERRORS = {
  NO_IP: '无可用IP',
  UNKNOWN_ISP: '未知运营商',
  INVALID_REGION: '无效区域'
};

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const clientInfo = {
    ip: request.headers.get('CF-Connecting-IP'),
    asn: request.cf.asn.toString(),
    region: request.cf.region,
    colo: request.cf.colo
  };

  try {
    const isp = determineISP(clientInfo.asn);
    const region = determineRegion(clientInfo);
    const bestIP = await selectBestIP(isp, region);

    return new Response(JSON.stringify({
      status: 'success',
      client: clientInfo,
      result: {
        isp: isp,
        region: region,
        ip: bestIP
      }
    }), {
      headers: {
        'content-type': 'application/json',
        'cache-control': 'max-age=300'
      }
    });
  } catch (error) {
    const status = error.message === ERRORS.NO_IP ? 503 : 500;
    return new Response(JSON.stringify({
      status: 'error',
      message: error.message,
      client: clientInfo
    }), {
      status: status,
      headers: { 'content-type': 'application/json' }
    });
  }
}

function determineISP(asn) {
  const isp = ASN_TO_ISP[asn];
  if (!isp) {
    throw new Error(ERRORS.UNKNOWN_ISP);
  }
  return isp;
}

function determineRegion(clientInfo) {
  const regionMap = {
    'SHA': 'EAST',   // 上海
    'BEJ': 'NORTH',  // 北京
    'GUD': 'SOUTH',  // 广东
    'HUB': 'CENTRAL' // 湖北
  };

  if (clientInfo.region && regionMap[clientInfo.region]) {
    return regionMap[clientInfo.region];
  }

  // 默认返回华东
  return 'EAST';
}

async function selectBestIP(isp, region) {
  let candidates = [];

  // 1. 优先选择同ISP同区域的IP
  if (IP_POOLS[isp] && IP_POOLS[isp][region] && IP_POOLS[isp][region].length > 0) {
    candidates = IP_POOLS[isp][region];
  }

  // 2. 如果没有找到,尝试同ISP其他区域
  if (candidates.length === 0 && IP_POOLS[isp]) {
    for (const r of REGIONS) {
      if (r !== region && IP_POOLS[isp][r] && IP_POOLS[isp][r].length > 0) {
        candidates = candidates.concat(IP_POOLS[isp][r]);
      }
    }
  }

  // 3. 如果还是没有,使用其他ISP的IP
  if (candidates.length === 0) {
    for (const otherIsp in IP_POOLS) {
      if (otherIsp !== isp && IP_POOLS[otherIsp][region] && IP_POOLS[otherIsp][region].length > 0) {
        candidates = candidates.concat(IP_POOLS[otherIsp][region]);
      }
    }
  }

  // 4. 如果还是没有找到可用IP,则抛出错误
  if (candidates.length === 0) {
    throw new Error(ERRORS.NO_IP);
  }

  // 随机选择一个IP,避免单点故障
  return candidates[Math.floor(Math.random() * candidates.length)];
}