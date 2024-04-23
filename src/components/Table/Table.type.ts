import { RatesRecord } from '../../servises/currencyPairs/currencyPairs.types'

export interface IProps {
  rates: IRates
}

export interface IRates {
  firstRates: RatesRecord
  secondRates: RatesRecord
  thirdRates: RatesRecord
}
