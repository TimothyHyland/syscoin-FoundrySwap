import { Currency, SYS, Token } from 'syscoin-swap'

export function currencyId(currency: Currency): string {
  if (currency === SYS) return 'ETH'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}
