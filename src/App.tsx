import { useState, useEffect, useCallback } from 'react'
import s from './App.module.scss'
import Table from './components/Table/Table'
import { INIT_STATE_DATA } from './const/currencyPairs'
import { pollFirstEndpoint, pollSecondEndpoint, pollThirdEndpoint } from './servises/currencyPairs/currencyPairs'
import { IRates } from './components/Table/Table.type'
import { RatesRecord, RecordKey } from './servises/currencyPairs/currencyPairs.types'

function App() {
  const [rates, setRates] = useState<IRates>({
    firstRates: INIT_STATE_DATA,
    secondRates: INIT_STATE_DATA,
    thirdRates: INIT_STATE_DATA,
  })

  const getMinVal = useCallback((first: RatesRecord, second: RatesRecord, third: RatesRecord) => {
    const valFirst = Object.values(first)
    const valsecond = Object.values(second)
    const valthird = Object.values(third)
    const minVal = findSmallestValue(([] as RecordKey[]).concat(valFirst, valsecond, valthird))

    return minVal
  }, [])

  const fetchData = useCallback(async () => {
    const first = await pollFirstEndpoint()
    const second = await pollSecondEndpoint()
    const third = await pollThirdEndpoint()
    const min = getMinVal(first, second, third)

    for (const key in first) {
      if (first[key].val === String(min)) {
        first[key].active = true
      } else {
        first[key].active = false
      }
    }

    for (const key in second) {
      if (second[key].val === String(min)) {
        second[key].active = true
      } else {
        second[key].active = false
      }
    }

    for (const key in third) {
      if (third[key].val === String(min)) {
        third[key].active = true
      } else {
        third[key].active = false
      }
    }

    setRates({ firstRates: first, secondRates: second, thirdRates: third })
  }, [getMinVal])

  const findSmallestValue = (values: RecordKey[]) => {
    let minVal = Number(values[0].val)

    values.forEach((item) => {
      const numericVal = Number(item.val)
      if (numericVal < minVal) {
        minVal = numericVal
      }
    })

    return minVal
  }

  useEffect(() => {
    fetchData()
    const timer = setInterval(() => {
      fetchData()
    }, 5000)

    return () => {
      clearInterval(timer)
    }
  }, [fetchData])

  return (
    <div className={s.wrapper}>
      <Table rates={rates} />
    </div>
  )
}

export default App
