import { INIT_STATE_DATA } from '../../const/currencyPairs'
import { changeDataFetch } from '../../utils/currencyPairs'
import { IDataFetch } from './currencyPairs.types'

export async function pollFirstEndpoint() {
  return await fetch('http://localhost:3000/api/v1/first')
    .then((response) => response.json())
    .then((data: IDataFetch) => {
      return changeDataFetch(data.rates)
    })
    .catch((error) => {
      console.error('Polling error: ', error)
      return INIT_STATE_DATA
    })
}

export async function pollSecondEndpoint() {
  return await fetch('http://localhost:3000/api/v1/second')
    .then((response) => response.json())
    .then((data: IDataFetch) => {
      return changeDataFetch(data.rates)
    })
    .catch((error) => {
      console.error('Polling error: ', error)
      return INIT_STATE_DATA
    })
}

export async function pollThirdEndpoint() {
  return await fetch('http://localhost:3000/api/v1/third')
    .then((response) => response.json())
    .then((data: IDataFetch) => {
      return changeDataFetch(data.rates)
    })
    .catch((error) => {
      console.error('Polling error: ', error)
      return INIT_STATE_DATA
    })
}
