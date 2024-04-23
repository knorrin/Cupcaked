import { IRatesFetch, RatesRecord } from '../servises/currencyPairs/currencyPairs.types'

export const changeDataFetch = ({ EUR, RUB, USD }: IRatesFetch): RatesRecord => {
  return {
    RUB_CUPCAKE: { active: false, val: RUB.toFixed(2) },
    USD_CUPCAKE: { active: false, val: USD.toFixed(2) },
    EUR_CUPCAKE: { active: false, val: EUR.toFixed(2) },
    RUB_USD: { active: false, val: (RUB / USD).toFixed(2) },
    RUB_EUR: { active: false, val: (RUB / EUR).toFixed(2) },
    EUR_USD: { active: false, val: (EUR / USD).toFixed(2) },
  }
}
