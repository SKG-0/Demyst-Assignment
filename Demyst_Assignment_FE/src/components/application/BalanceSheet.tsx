import React from 'react'
import { useAppSelector } from '../../store/hooks'

const BalanceSheet:React.FC = () => {

    //Fetching balance sheet from store
    const sheet = useAppSelector(state => state.balanceSheet.list)

  return (
      <table role="balance-sheet-table" className='w-full max-w-[700px] border-none outline-none shadow-xl'>
        <thead className='w-full h-8'>
            <tr className='bg-primarySkiedBlue'>
                <th className='text-center border-[1px] border-solid border-gray-400'>Year</th>
                <th className='text-center border-[1px] border-solid border-gray-400'>Month</th>
                <th className='text-center border-[1px] border-solid border-gray-400'>Profit/Loss</th>
                <th className='text-center border-[1px] border-solid border-gray-400'>Assets Value</th>
            </tr>
        </thead>
        <tbody>
            {sheet.map((item, index) => {
               return <tr key={index} className='bg-gray-200 w-full h-8'>
                    <td className='text-center border-[1px] border-solid border-gray-400 text-black'>{item.year}</td>
                    <td className='text-center border-[1px] border-solid border-gray-400 text-black'>{item.month}</td>
                    <td className='text-center border-[1px] border-solid border-gray-400 text-black'>{item.profitOrLoss}</td>
                    <td className='text-center border-[1px] border-solid border-gray-400 text-black'>{item.assetsValue}</td>
                </tr>
            })}
        </tbody>
      </table>
  )
}

export default BalanceSheet
