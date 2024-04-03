export interface ICurrencyListModel {
  Date: string
  PreviousDate: string
  PreviousURL: string
  Timestamp: string
  Valute: Record<string, Currency>
}

export interface ICurrency {
  ID: string
  NumCode: string
  CharCode: string
  Nominal: number
  Name: string
  Value: number
  Previous: number
}