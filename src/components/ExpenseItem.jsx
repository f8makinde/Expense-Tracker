import React from 'react'
import ExpenseDate from './ExpenseDate'

const ExpenseItem = ({id, title, amount, date} = props) => {

  return (
    <div className='bg-green-900 p-6 max-w-[1100px] mx-auto p-3'>
      <div className='flex md:flex-row flex-col bg-white/10 justify-between p-5 space-y-3 shadow-xl rounded-xl' key={id}>
        <div className='flex md:flex-row flex-col md:items-center gap-6 '>
            <ExpenseDate date={date}/>

          <h2 className='text-white text-3xl font-bold'>{title}</h2>
        </div>
        <div className='bg-green-800 text-2xl border-4 rounded-lg text-white py-4 px-6 border-white font-bold'>${amount}</div>
      </div>
      </div>
    
  )
}

export default ExpenseItem
