// IP池配置 - 更新时间: 2024-11-29T08:23:45.302889
const IP_POOLS = {
  "CHINA_TELECOM": {
    "EAST": [
      "104.21.231.241",
      "104.17.17.201",
      "104.16.166.198",
      "104.18.220.175",
      "104.17.62.103",
      "104.16.243.170",
      "104.16.26.176",
      "104.17.169.110",
      "104.18.139.82",
      "104.17.24.113",
      "104.22.54.147",
      "104.17.73.111",
      "104.25.44.87",
      "172.67.228.141",
      "104.21.210.118",
      "104.21.64.37",
      "172.67.100.49",
      "104.25.104.110",
      "104.25.56.23",
      "104.24.74.168"
    ],
    "SOUTH": [
      "104.18.214.99",
      "104.19.111.76",
      "172.65.230.71",
      "104.18.226.80",
      "104.18.197.70",
      "104.18.154.168",
      "104.16.54.225",
      "104.16.136.160",
      "104.22.62.190",
      "104.19.3.235",
      "104.17.75.149",
      "104.18.198.248",
      "104.21.23.102",
      "104.21.78.171",
      "104.21.60.155",
      "172.65.8.85",
      "172.67.14.115",
      "104.25.114.13",
      "104.27.0.223",
      "104.25.234.24"
    ],
    "NORTH": [
      "172.67.215.171",
      "172.67.142.194",
      "104.19.23.183",
      "104.18.200.155",
      "104.18.224.42",
      "108.162.193.29",
      "104.19.170.84",
      "104.17.6.234",
      "104.19.249.178",
      "104.16.218.59",
      "172.65.79.221",
      "172.66.135.150",
      "104.25.180.201",
      "172.65.96.39",
      "104.24.56.8",
      "104.27.22.165",
      "104.20.31.32",
      "104.20.165.253",
      "104.25.253.237",
      "172.67.89.211"
    ],
    "CENTRAL": [
      "104.18.176.245",
      "104.19.221.105",
      "104.18.206.3",
      "104.21.75.1",
      "172.67.237.12",
      "104.21.209.66",
      "104.25.40.195",
      "172.65.162.74",
      "104.21.219.19",
      "104.24.2.65",
      "104.18.63.246",
      "104.27.206.95",
      "104.20.41.72",
      "104.27.50.51",
      "104.27.17.188",
      "104.20.64.215",
      "172.65.144.73",
      "104.25.112.227",
      "104.20.251.124",
      "172.65.65.16"
    ],
    "SOUTHWEST": [
      "104.17.46.58",
      "104.16.188.3",
      "104.17.174.134",
      "104.21.225.156",
      "104.18.219.112",
      "104.16.138.42",
      "104.16.216.210",
      "104.16.44.188",
      "172.65.36.205",
      "172.67.159.139",
      "172.67.197.207",
      "104.21.211.172",
      "104.27.43.231",
      "104.24.146.38",
      "104.27.199.196",
      "172.67.153.33",
      "104.27.40.10",
      "104.20.142.40",
      "172.66.213.67",
      "172.67.106.131"
    ],
    "NORTHWEST": [
      "104.21.55.207",
      "104.16.84.134",
      "104.16.161.208",
      "104.19.167.20",
      "172.66.2.28",
      "104.16.106.215",
      "104.19.61.86",
      "104.21.197.208",
      "104.18.212.5",
      "104.16.180.176",
      "172.67.85.211",
      "104.25.239.121",
      "104.22.50.178",
      "104.20.45.248",
      "104.25.85.92",
      "104.25.141.158",
      "104.24.142.204",
      "172.66.214.40",
      "172.65.112.104",
      "104.24.198.103"
    ],
    "NORTHEAST": [
      "104.16.63.47",
      "104.19.5.231",
      "104.19.109.139",
      "104.16.53.5",
      "104.17.20.161",
      "172.67.211.37",
      "172.67.222.239",
      "172.65.217.80",
      "104.17.234.2",
      "104.16.179.99",
      "104.17.24.49",
      "104.19.250.222",
      "104.16.247.153",
      "104.18.107.156",
      "172.65.133.67",
      "172.67.119.50",
      "104.24.7.171",
      "104.25.209.153",
      "172.67.4.254",
      "104.20.158.159"
    ]
  },
  "CHINA_UNICOM": {
    "EAST": [
      "104.19.181.62",
      "104.21.231.241",
      "104.18.154.168",
      "104.19.221.105",
      "104.18.224.42",
      "104.18.176.245",
      "104.19.111.76",
      "172.66.2.28",
      "172.67.100.49",
      "104.19.250.222",
      "104.21.60.155",
      "104.25.72.61",
      "172.67.159.139",
      "104.24.38.207",
      "104.27.50.51",
      "104.25.209.153",
      "104.27.40.10",
      "104.20.118.221",
      "104.25.166.163",
      "104.19.162.253"
    ],
    "SOUTH": [
      "104.20.23.46",
      "172.67.142.194",
      "104.19.109.139",
      "104.16.26.176",
      "104.17.234.2",
      "104.24.154.121",
      "104.16.84.134",
      "104.19.167.20",
      "104.21.75.1",
      "172.67.228.141",
      "104.21.210.118",
      "104.16.166.198",
      "104.21.78.171",
      "104.25.114.13",
      "104.24.221.44",
      "104.27.111.94",
      "104.24.56.8",
      "104.20.31.32",
      "104.16.180.176",
      "104.20.89.215"
    ],
    "NORTH": [
      "104.18.206.3",
      "104.17.20.161",
      "104.22.62.190",
      "104.19.3.235",
      "104.22.12.122",
      "172.66.155.200",
      "104.21.64.37",
      "104.19.249.178",
      "104.21.209.66",
      "104.16.247.153",
      "104.16.44.188",
      "104.25.40.195",
      "104.24.74.168",
      "172.65.79.221",
      "172.65.96.39",
      "104.27.51.103",
      "104.24.26.28",
      "104.20.221.208",
      "104.21.211.172",
      "104.27.43.231"
    ],
    "CENTRAL": [
      "172.67.215.171",
      "104.19.23.183",
      "104.21.55.207",
      "104.27.104.142",
      "172.67.211.37",
      "104.17.17.201",
      "104.17.73.111",
      "104.22.54.147",
      "104.18.219.112",
      "104.16.138.42",
      "104.21.225.156",
      "104.25.104.110",
      "104.25.56.23",
      "104.20.20.214",
      "104.25.27.153",
      "104.24.22.125",
      "172.65.133.67",
      "172.67.92.0",
      "104.22.50.178",
      "172.67.106.131"
    ],
    "SOUTHWEST": [
      "172.65.230.71",
      "104.18.197.70",
      "104.16.54.225",
      "104.16.136.160",
      "104.16.188.3",
      "172.65.217.80",
      "104.25.247.152",
      "104.18.214.99",
      "108.162.193.29",
      "172.67.222.239",
      "104.18.198.248",
      "104.17.169.110",
      "104.21.23.102",
      "172.65.8.85",
      "104.18.226.80",
      "104.16.216.210",
      "172.67.237.12",
      "104.17.62.103",
      "104.16.53.5",
      "104.18.212.5"
    ],
    "NORTHWEST": [
      "104.18.57.90",
      "104.17.6.234",
      "104.16.179.99",
      "104.17.24.113",
      "104.18.139.82",
      "104.19.170.84",
      "172.65.161.235",
      "104.17.174.134",
      "104.17.46.58",
      "104.18.200.155",
      "172.67.14.115",
      "104.21.197.208",
      "104.21.219.19",
      "104.16.106.215",
      "172.65.36.205",
      "104.20.41.72",
      "104.24.2.65",
      "104.25.180.201",
      "104.25.230.249",
      "172.67.197.207"
    ],
    "NORTHEAST": [
      "104.18.220.175",
      "104.16.161.208",
      "104.16.243.170",
      "104.25.44.87",
      "104.16.218.59",
      "172.65.162.74",
      "104.17.24.49",
      "104.27.0.223",
      "104.25.234.24",
      "104.24.30.181",
      "104.27.206.95",
      "104.25.253.237",
      "104.25.112.227",
      "104.20.156.220",
      "104.24.142.199",
      "104.16.7.131"
    ]
  },
  "CHINA_MOBILE": {
    "EAST": [
      "104.18.57.90",
      "104.24.154.121"
    ],
    "SOUTH": [
      "104.19.181.62",
      "172.65.230.71",
      "104.20.23.46"
    ],
    "NORTH": [],
    "CENTRAL": [
      "104.16.63.47",
      "104.16.63.140"
    ],
    "SOUTHWEST": [
      "104.24.81.123",
      "104.18.88.74"
    ],
    "NORTHWEST": [
      "172.66.155.200",
      "172.65.161.235"
    ],
    "NORTHEAST": [
      "104.27.104.142",
      "172.65.161.231"
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