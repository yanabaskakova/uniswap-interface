import { WETH9, Token, Ether } from '@uniswap/sdk-core'
// import { UNI_ADDRESS } from './addresses'
import { SupportedChainId } from './chains'

export const USDT = new Token(
  SupportedChainId.BSC_TESTNET,
  '0x55d398326f99059fF775485246999027B3197955',
  18,
  'USDT',
  'Tether USD'
)

export const VIDYX = new Token(
  SupportedChainId.BSC_TESTNET,
  '0x87957D6A2FbBDB092388B9df15817234B844663b',
  8,
  'VIDYX',
  'VidyX'
)

export const RARA = new Token(
  SupportedChainId.BSC_MAINNET,
  '0x83d0E7Ddd6208EC6Df83807660024cbb7878B685',
  18,
  'RARA',
  'RARA'
)
// export const AMPL = new Token(1, '0xD46bA6D942050d489DBd938a2C909A5d5039A161', 9, 'AMPL', 'Ampleforth')
// export const DAI = new Token(1, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18, 'DAI', 'Dai Stablecoin')
// export const USDC = new Token(1, '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 6, 'USDC', 'USD//C')
// export const USDT = new Token(1, '0xdAC17F958D2ee523a2206206994597C13D831ec7', 6, 'USDT', 'Tether USD')
// export const WBTC = new Token(1, '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599', 8, 'WBTC', 'Wrapped BTC')
// export const FEI = new Token(1, '0x956F47F50A910163D8BF957Cf5846D573E7f87CA', 18, 'FEI', 'Fei USD')
// export const TRIBE = new Token(1, '0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B', 18, 'TRIBE', 'Tribe')
// export const FRAX = new Token(1, '0x853d955aCEf822Db058eb8505911ED77F175b99e', 18, 'FRAX', 'Frax')
// export const FXS = new Token(1, '0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0', 18, 'FXS', 'Frax Share')
// export const renBTC = new Token(1, '0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D', 8, 'renBTC', 'renBTC')
// export const UMA = new Token(1, '0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828', 18, 'UMA', 'UMA Voting Token v1')
// export const VIDYX = new Token(1, 'TJBhS32MKMH6eQi9sfsiQjmCHi7bPbygTy', 6, 'VIDYX', 'VidyX')
// export const ETH2X_FLI = new Token(
//   1,
//   '0xAa6E8127831c9DE45ae56bB1b0d4D4Da6e5665BD',
//   18,
//   'ETH2x-FLI',
//   'ETH 2x Flexible Leverage Index'
// )
// Mirror Protocol compat.
// export const UST = new Token(1, '0xa47c8bf37f92abed4a126bda807a7b7498661acd', 18, 'UST', 'Wrapped UST')
// export const MIR = new Token(1, '0x09a3ecafa817268f77be1283176b946c4ff2e608', 18, 'MIR', 'Wrapped MIR')
// export const UNI: { [chainId: number]: Token } = {
// [SupportedChainId.MAINNET]: new Token(SupportedChainId.MAINNET, UNI_ADDRESS[1], 18, 'UNI', 'Uniswap'),
// [SupportedChainId.RINKEBY]: new Token(SupportedChainId.RINKEBY, UNI_ADDRESS[4], 18, 'UNI', 'Uniswap'),
// [SupportedChainId.ROPSTEN]: new Token(SupportedChainId.ROPSTEN, UNI_ADDRESS[3], 18, 'UNI', 'Uniswap'),
// [SupportedChainId.GOERLI]: new Token(SupportedChainId.GOERLI, UNI_ADDRESS[5], 18, 'UNI', 'Uniswap'),
// [SupportedChainId.KOVAN]: new Token(SupportedChainId.KOVAN, UNI_ADDRESS[42], 18, 'UNI', 'Uniswap'),
// }
export const WETH9_EXTENDED: { [chainId: number]: Token } = {
  ...WETH9,
  [SupportedChainId.BSC_MAINNET]: new Token(
    SupportedChainId.BSC_MAINNET,
    '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    // '0x848289141674B5ffFAdf87902144B3e72AB52560',
    18,
    'WBNB',
    'Wrapperd Binance Coin'
  ),
  [SupportedChainId.BSC_TESTNET]: new Token(
    SupportedChainId.BSC_TESTNET,
    '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
    // '0x848289141674B5ffFAdf87902144B3e72AB52560',
    18,
    'WBNB',
    'Wrapperd Binance Coin'
  ),
}

export class ExtendedEther extends Ether {
  public get wrapped(): Token {
    if (this.chainId in WETH9_EXTENDED) return WETH9_EXTENDED[this.chainId]
    throw new Error('Unsupported chain ID')
  }

  public static onChain(chainId: number): ExtendedEther {
    return new ExtendedEther(chainId)
  }
}
