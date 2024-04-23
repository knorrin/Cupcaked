import { IProps } from './TableRow.types'
import s from './TableRow.module.scss'

const TableRow = ({ title, firstRates, secondRates, thirdRates }: IProps) => {
  return (
    <tr>
      <td>{title}</td>
      <td className={firstRates.active ? s.td_color : undefined}>{firstRates.val}</td>
      <td className={secondRates.active ? s.td_color : undefined}>{secondRates.val}</td>
      <td className={thirdRates.active ? s.td_color : undefined}>{thirdRates.val}</td>
    </tr>
  )
}

export default TableRow
