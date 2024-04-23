export interface IRatesFetch {
  RUB: number
  USD: number
  EUR: number
}

export interface IDataFetch {
  rates: IRatesFetch
  timestamp: number
  base: string
  date: string
}

export type RatesRecord = Record<string, RecordKey>

export interface RecordKey {
  active: boolean
  val: string | null
}
