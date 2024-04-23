import { IProps } from './Table.type'
import TableRow from './TableRow/TableRow'

const Table = ({ rates }: IProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Pair Name/market</th>
          <th>First</th>
          <th>Second</th>
          <th>Third</th>
        </tr>
      </thead>
      <tbody>
        <TableRow
          title='RUB/CUPCAKE'
          firstRates={rates.firstRates.RUB_CUPCAKE}
          secondRates={rates.secondRates.RUB_CUPCAKE}
          thirdRates={rates.thirdRates.RUB_CUPCAKE}
        />
        <TableRow
          title='USD/CUPCAKE'
          firstRates={rates.firstRates.USD_CUPCAKE}
          secondRates={rates.secondRates.USD_CUPCAKE}
          thirdRates={rates.thirdRates.USD_CUPCAKE}
        />
        <TableRow
          title='EUR/CUPCAKE'
          firstRates={rates.firstRates.EUR_CUPCAKE}
          secondRates={rates.secondRates.EUR_CUPCAKE}
          thirdRates={rates.thirdRates.EUR_CUPCAKE}
        />
        <TableRow
          title='RUB/USD'
          firstRates={rates.firstRates.RUB_USD}
          secondRates={rates.secondRates.RUB_USD}
          thirdRates={rates.thirdRates.RUB_USD}
        />
        <TableRow
          title='RUB/EUR'
          firstRates={rates.firstRates.RUB_EUR}
          secondRates={rates.secondRates.RUB_EUR}
          thirdRates={rates.thirdRates.RUB_EUR}
        />
        <TableRow
          title='EUR/USD'
          firstRates={rates.firstRates.EUR_USD}
          secondRates={rates.secondRates.EUR_USD}
          thirdRates={rates.thirdRates.EUR_USD}
        />
      </tbody>
    </table>
  )
}

export default Table
