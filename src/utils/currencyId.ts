import { Currency } from '@uniswap/sdk-core'

export function currencyId(currency: Currency): string {
  if (currency.isNative) return 'ETH' // TODO: CHANGE TO BNB
  if (currency.isToken) return currency.address
  throw new Error('invalid currency')
}
