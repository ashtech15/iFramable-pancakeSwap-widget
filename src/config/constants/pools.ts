import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    tokenName: 'CAKE',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x73feaa1eE314F8c655E354234017bE2193C9E24E',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://pancakeswap.finance/',
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
  {
    sousId: 43,
    tokenName: 'LIT',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      56: '0x1714bAAE9DD4738CDEA07756427FA8d4F08D9479',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://www.litentry.com/',
    harvest: true,
    tokenPerBlock: '0.231',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
  },
  {
    sousId: 42,
    tokenName: 'HGET',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      56: '0xcCD0b93cC6ce3dC6dFaA9DB68f70e5C8455aC5bd',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://www.hedget.com/',
    harvest: true,
    tokenPerBlock: '0.0138',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 6,
  },
  {
    sousId: 41,
    tokenName: 'BDO',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      56: '0x9cB24e9460351bC51d4066BC6AEd1F3809b02B78',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://bdollar.fi/',
    harvest: true,
    tokenPerBlock: '0.075',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
  },
  {
    sousId: 40,
    tokenName: 'EGLD',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      56: '0x2dcf4cDFf4Dd954683Fe0a6123077f8a025b66cF',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://elrond.com/',
    harvest: true,
    tokenPerBlock: '0.001215',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
  },
  {
    sousId: 39,
    tokenName: 'UST',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      56: '0x6EFa207ACdE6e1caB77c1322CbdE9628929ba88F',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://mirror.finance/',
    harvest: true,
    tokenPerBlock: '0.1157',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
  },
  {
    sousId: 38,
    tokenName: 'wSOTE',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      56: '0xD0b738eC507571176D40f28bd56a0120E375f73a',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://soteria.finance/#/',
    harvest: true,
    tokenPerBlock: '0.23',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
  },
  {
    sousId: 37,
    tokenName: 'FRONT',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      56: '0xf7a31366732F08E8e6B88519dC3E827e04616Fc9',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://frontier.xyz/',
    harvest: true,
    tokenPerBlock: '0.2546',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
  },
  {
    sousId: 36,
    tokenName: 'Helmet',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      56: '0x9F23658D5f4CEd69282395089B0f8E4dB85C6e79',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://www.helmet.insure/',
    harvest: true,
    tokenPerBlock: '0.81',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
  },
  {
    sousId: 35,
    tokenName: 'BTCST',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      56: '0xB6fd2724cc9c90DD31DA35DbDf0300009dceF97d',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://www.1-b.tc/',
    harvest: true,
    tokenPerBlock: '0.011574',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
  },
  {
    sousId: 34,
    tokenName: 'BSCX',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      56: '0x108BFE84Ca8BCe0741998cb0F60d313823cEC143',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://bscex.org/',
    harvest: true,
    tokenPerBlock: '0.17361',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
  },
  {
    sousId: 33,
    tokenName: 'TEN',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      56: '0x4A26b082B432B060B1b00A84eE4E823F04a6f69a',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://www.tenet.farm/',
    harvest: true,
    tokenPerBlock: '0.05787',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
  },
  {
    sousId: 32,
    tokenName: 'bALBT',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      56: '0x3cc08B7C6A31739CfEd9d8d38b484FDb245C79c8',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://allianceblock.io/',
    harvest: true,
    tokenPerBlock: '0.4166',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
  },
  {
    sousId: 31,
    tokenName: 'ASR',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      56: '0xd18E1AEb349ef0a6727eCe54597D98D263e05CAB',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://www.chiliz.com',
    harvest: true,
    tokenPerBlock: '0.01',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 2,
  },
  {
    sousId: 30,
    tokenName: 'ATM',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      56: '0x68C7d180bD8F7086D91E65A422c59514e4aFD638',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://www.chiliz.com',
    harvest: true,
    tokenPerBlock: '0.01',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 2,
  },
  {
    sousId: 29,
    tokenName: 'OG',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      56: '0xbE65d7e42E05aD2c4ad28769dc9c5b4b6EAff2C7',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://www.chiliz.com',
    harvest: true,
    tokenPerBlock: '0.01',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 2,
  },
  {
    sousId: 28,
    tokenName: 'REEF',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      56: '0x1500fa1afbfe4f4277ed0345cdf12b2c9ca7e139',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://reef.finance/',
    harvest: true,
    tokenPerBlock: '115.74',
    sortOrder: 5,
    isFinished: false,
    tokenDecimals: 18,
  },
  {
    sousId: 27,
    tokenName: 'DITTO',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      56: '0x624ef5C2C6080Af188AF96ee5B3160Bb28bb3E02',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://ditto.money/',
    harvest: true,
    tokenPerBlock: '0.01157',
    sortOrder: 5,
    isFinished: false,
    tokenDecimals: 9,
  },
  {
    sousId: 26,
    image: 'CAKETWT',
    tokenName: 'CAKE',
    stakingTokenName: QuoteToken.TWT,
    stakingTokenAddress: '0x4b0f1812e5df2a09796481ff14017e6005508003',
    stakingLimit: 1000,
    contractAddress: {
      97: '',
      56: '0x0554a5D083Abf2f056ae3F6029e1714B9A655174',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://trustwallet.com/',
    harvest: true,
    tokenPerBlock: '0.248',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
  },
  {
    sousId: 24,
    tokenName: 'JUV',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      56: '0x543467B17cA5De50c8BF7285107A36785Ab57E56',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://www.chiliz.com',
    harvest: true,
    tokenPerBlock: '0.02',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 2,
  },
  {
    sousId: 25,
    tokenName: 'PSG',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      56: '0x65aFEAFaec49F23159e897EFBDCe19D94A86A1B6',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://www.chiliz.com',
    harvest: true,
    tokenPerBlock: '0.02',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 2,
  },
  {
    sousId: 22,
    tokenName: 'JUV',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      56: '0x27Bd41E77cab966a57232915292410ACfD2761Ac',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://www.chiliz.com',
    harvest: true,
    tokenPerBlock: '0.02',
    sortOrder: 999,
    isFinished: true,
    tokenDecimals: 2,
  },
  {
    sousId: 23,
    tokenName: 'PSG',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      56: '0x1DA236Ec18D80ADd7740baD2A74cdA2ADb9E17bE',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://www.chiliz.com',
    harvest: true,
    tokenPerBlock: '0.02',
    sortOrder: 999,
    isFinished: true,
    tokenDecimals: 2,
  },
  {
    sousId: 21,
    tokenName: 'VAI',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      56: '0x1AD34D8d4D79ddE88c9B6b8490F8fC67831f2CAe',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://venus.io/',
    harvest: true,
    tokenPerBlock: '0.104',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
  },
  {
    sousId: 20,
    image: 'CAKEBNB',
    tokenName: 'CAKE',
    stakingTokenName: QuoteToken.BNB,
    stakingLimit: 10,
    contractAddress: {
      97: '',
      56: '0x555Ea72d7347E82C614C16f005fA91cAf06DCB5a',
    },
    poolCategory: PoolCategory.BINANCE,
    projectLink: 'https://pancakeswap.finance/',
    harvest: true,
    tokenPerBlock: '0.5',
    sortOrder: 999,
    isFinished: true,
    tokenDecimals: 18,
  },
  {
    sousId: 19,
    tokenName: 'BNB',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      56: '0x326D754c64329aD7cb35744770D56D0E1f3B3124',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://pancakeswap.finance/',
    harvest: true,
    tokenPerBlock: '0.0041',
    sortOrder: 999,
    isFinished: true,
    tokenDecimals: 18,
  },
  {
    sousId: 18,
    tokenName: 'BLK',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      56: '0x42Afc29b2dEa792974d1e9420696870f1Ca6d18b',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://blink.wink.org',
    harvest: true,
    tokenPerBlock: '23.14',
    sortOrder: 999,
    isFinished: true,
    tokenDecimals: 6,
  },
  {
    sousId: 17,
    tokenName: 'BLK',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      56: '0xBb2B66a2c7C2fFFB06EA60BeaD69741b3f5BF831',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://blink.wink.org',
    harvest: true,
    tokenPerBlock: '23.14',
    sortOrder: 999,
    isFinished: true,
    tokenDecimals: 18,
  },
  {
    sousId: 16,
    tokenName: 'UNFI',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      56: '0xFb1088Dae0f03C5123587d2babb3F307831E6367',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://unifiprotocol.com',
    harvest: true,
    tokenPerBlock: '0.02893',
    sortOrder: 999,
    isFinished: true,
    tokenDecimals: 18,
  },
  {
    sousId: 15,
    tokenName: 'TWT',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      56: '0x9c4EBADa591FFeC4124A7785CAbCfb7068fED2fb',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://trustwallet.com/',
    harvest: true,
    tokenPerBlock: '5',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
  },
  {
    sousId: 14,
    tokenName: 'HARD',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      56: '0x90F995b9d46b32c4a1908A8c6D0122e392B3Be97',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://hard.kava.io',
    harvest: true,
    tokenPerBlock: '0.346',
    sortOrder: 999,
    isFinished: true,
    tokenDecimals: 6,
  },
  {
    sousId: 13,
    tokenName: 'bROOBEE',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '',
      56: '0xdc8c45b7F3747Ca9CaAEB3fa5e0b5FCE9430646b',
    },
    poolCategory: PoolCategory.COMMUNITY,
    projectLink: 'https://roobee.io/',
    harvest: true,
    tokenPerBlock: '12.5',
    sortOrder: 999,
    isFinished: true,
    tokenDecimals: 18,
  },
  {
    sousId: 12,
    tokenName: 'STAX',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xFF02241a2A1d2a7088A344309400E9fE74772815',
    },
    poolCategory: PoolCategory.COMMUNITY,
    projectLink: 'http://stablexswap.com/',
    harvest: true,
    tokenPerBlock: '0.2',
    sortOrder: 999,
    isFinished: true,
    tokenDecimals: 18,
  },
  {
    sousId: 11,
    tokenName: 'NAR',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xDc938BA1967b06d666dA79A7B1E31a8697D1565E',
    },
    poolCategory: PoolCategory.COMMUNITY,
    projectLink: 'https://narwhalswap.org/',
    harvest: true,
    tokenPerBlock: '1',
    sortOrder: 999,
    isFinished: true,
    tokenDecimals: 18,
  },
  {
    sousId: 10,
    tokenName: 'NYA',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x07a0A5B67136d40F4d7d95Bc8e0583bafD7A81b9',
    },
    poolCategory: PoolCategory.COMMUNITY,
    projectLink: 'https://nyanswop.org/',
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '10',
    isFinished: true,
    tokenDecimals: 18,
  },
  {
    sousId: 9,
    tokenName: 'CTK',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
      56: '0x21A9A53936E812Da06B7623802DEc9A1f94ED23a',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://www.certik.foundation/',
    harvest: true,
    tokenPerBlock: '0.5',
    sortOrder: 999,
    isFinished: true,
    tokenDecimals: 6,
  },
  {
    sousId: 8,
    tokenName: 'TWT',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
      56: '0xe7f9A439Aa7292719aC817798DDd1c4D35934aAF',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://trustwallet.com/',
    harvest: true,
    tokenPerBlock: '20',
    sortOrder: 999,
    isFinished: true,
    tokenDecimals: 18,
  },
  {
    sousId: 7,
    tokenName: 'INJ',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
      56: '0xcec2671C81a0Ecf7F8Ee796EFa6DBDc5Cb062693',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://injectiveprotocol.com/',
    harvest: true,
    tokenPerBlock: '0.25',
    sortOrder: 999,
    isFinished: true,
    tokenDecimals: 18,
  },
  {
    sousId: 6,
    tokenName: 'CTK',
    stakingTokenName: QuoteToken.SYRUP,
    stakingTokenAddress: '0x009cF7bC57584b7998236eff51b98A168DceA9B0',
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xF35d63Df93f32e025bce4A1B98dcEC1fe07AD892',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://www.certik.foundation/',
    harvest: true,
    tokenPerBlock: '0.5',
    sortOrder: 999,
    isFinished: true,
    tokenDecimals: 18,
  },
  {
    sousId: 5,
    tokenName: 'CTK',
    stakingTokenName: QuoteToken.SYRUP,
    stakingTokenAddress: '0x009cF7bC57584b7998236eff51b98A168DceA9B0',
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x3B9B74f48E89Ebd8b45a53444327013a2308A9BC',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://www.certik.foundation/',
    tokenPerBlock: '0.5',
    sortOrder: 999,
    isFinished: true,
    tokenDecimals: 6,
  },
  {
    sousId: 4,
    tokenName: 'SXP',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xD32B30b151a6aDB2e0Fa573a37510C097DaBD2F3',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://swipe.io/',
    harvest: true,
    tokenPerBlock: '0.5',
    sortOrder: 999,
    isFinished: true,
    tokenDecimals: 18,
  },
  {
    sousId: 3,
    tokenName: 'INJ',
    stakingTokenName: QuoteToken.SYRUP,
    stakingTokenAddress: '0x009cF7bC57584b7998236eff51b98A168DceA9B0',
    contractAddress: {
      97: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
      56: '0x92E8CeB7eAeD69fB6E4d9dA43F605D2610214E68',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://injectiveprotocol.com/',
    harvest: true,
    tokenPerBlock: '0.25',
    sortOrder: 999,
    isFinished: true,
    tokenDecimals: 18,
  },
  {
    sousId: 2,
    tokenName: 'ALPHA',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x73c83bd1646991cBca3e6b83ca905542FE07C57A',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://alphafinance.io/',
    harvest: true,
    tokenPerBlock: '20',
    sortOrder: 999,
    isFinished: true,
    tokenDecimals: 18,
  },
  {
    sousId: 1,
    tokenName: 'TWT',
    stakingTokenName: QuoteToken.SYRUP,
    stakingTokenAddress: '0x009cF7bC57584b7998236eff51b98A168DceA9B0',
    contractAddress: {
      97: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
      56: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://trustwallet.com/',
    harvest: true,
    tokenPerBlock: '20',
    sortOrder: 999,
    isFinished: true,
    tokenDecimals: 18,
  },
  {
    sousId: -1,
    tokenName: 'XVS',
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x6ab8463a4185b80905e05a9ff80a2d6b714b9e95',
    },
    tokenPerBlock: '0',
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://venus.io/',
    sortOrder: 999,
    isFinished: true,
    tokenDecimals: 18,
  },
]

export default pools
