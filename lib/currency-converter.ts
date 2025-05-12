const EXCHANGE_RATES = {
  USD: 1,
  NGN: 1500,
  GHS: 12.5,
  GBP: 0.79,
}

export type CurrencyCode = keyof typeof EXCHANGE_RATES

export function convertPrice(amount: number, from: CurrencyCode, to: CurrencyCode): number {
  const amountInUSD = amount / EXCHANGE_RATES[from]
  return amountInUSD * EXCHANGE_RATES[to]
}

export function formatCurrency(amount: number, currency: CurrencyCode): string {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
  return formatter.format(amount)
}

export const CURRENCY_SYMBOLS = {
  USD: '$',
  NGN: '₦',
  GHS: 'GH₵',
  GBP: '£',
}
