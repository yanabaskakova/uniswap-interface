import { Web3Provider } from '@ethersproject/providers'
import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'
import { BscConnector } from '@binance-chain/bsc-connector'
import { SupportedChainId } from '../constants/chains'
import getLibrary from '../utils/getLibrary'

import { NetworkConnector } from './NetworkConnector'
import UNISWAP_LOGO_URL from '../assets/svg/logo.svg'

// const WALLETCONNECT_BRIDGE_URL = process.env.REACT_APP_WALLETCONNECT_BRIDGE_URL

const NETWORK_URLS: {
  [chainId in SupportedChainId]: string
} = {
  [SupportedChainId.BSC_TESTNET]: `https://data-seed-prebsc-1-s1.binance.org:8545`,
}

const SUPPORTED_CHAIN_IDS: SupportedChainId[] = [SupportedChainId.BSC_TESTNET]

export const network = new NetworkConnector({
  urls: NETWORK_URLS,
  defaultChainId: 97,
})

let networkLibrary: Web3Provider | undefined
export function getNetworkLibrary(): Web3Provider {
  return (networkLibrary = networkLibrary ?? getLibrary(network.provider))
}

export const injected = new InjectedConnector({
  supportedChainIds: SUPPORTED_CHAIN_IDS,
})

export const bscConnector = new BscConnector({ supportedChainIds: [56] })

export const walletconnect = new WalletConnectConnector({
  supportedChainIds: SUPPORTED_CHAIN_IDS,
  rpc: NETWORK_URLS,
  bridge: 'https://bridge.walletconnect.org',
  // bridge: WALLETCONNECT_BRIDGE_URL,
  qrcode: true,
  pollingInterval: 15000,
})

// export const walletconnect = new WalletConnectConnector({
//   rpc: { [NETWORK_CHAIN_ID]: NETWORK_URL },
//   bridge: 'https://bridge.walletconnect.org',
//   qrcode: true,
//   pollingInterval: 15000,
// })

// mainnet only
export const walletlink = new WalletLinkConnector({
  url: NETWORK_URLS[97],
  appName: 'Uniswap',
  appLogoUrl: UNISWAP_LOGO_URL,
})
