import { AllFarms } from './farms';
import { Configuration } from './iron-bank/config';
import deploymentMainnet from './iron-bank/deployments/mainnet';

const config: Configuration = {
  chainId: 137,
  etherscanUrl: 'https://polygonscan.com',
  defaultProvider: 'https://rpc-mainnet.maticvigil.com',
  deployments: deploymentMainnet,
  tokens: {
    USDC: ['0xdd9185db084f5c4fff3b4f70e7ba62123b812226', 6], // USDC on Polygon
    TITAN: ['0xaAa5B9e6c589642f98a1cDA99B9D024B8407285A', 18], // TITAN on Polygon
    IRON: ['0xd86b5923f3ad7b585ed81b448170ae026c65ae9a', 18], // IRON on Polygon
  },
  foundryPools: [],
  oracleDollarUsdc: '0x16893D00D0570421A058E5a34B494626c63b3A9d', // PairOracle_IRON_USDC
  oracleShareEth: '0xf5f2b20f26F8B7E73f60B713B1D1EcD74d0BD24B', // PairOracle_TITAN_MATIC
  pollingInterval: 10 * 1000,
  defaultSlippageTolerance: 0.001,
  gasLimitMultiplier: 1.5,
  backendUrl: 'https://api.iron.finance',
  backendDisabled: false,
  enabledChart: true,
  excludedAddress: [],
  buyShareHref:
    'https://quickswap.exchange/#/swap?outputCurrency=0x7D3dfd002e174DC1AcE793b0ffD46F03ef24dB31', // TITAN
  buyDollarHref:
    'https://quickswap.exchange/#/swap?outputCurrency=0x259C7270305CBF2099463bE6b2F951709F5c1f53', // IRON
  multicall: '0x2C738AABBd2FA2e7A789433965BEEb7429cB4D7e',
  lotteryAddress: '0xBa6770A08D1D31Ab24d36d14C4D8E2d4BDA72f21',
  farms: AllFarms,
};

export default config;
