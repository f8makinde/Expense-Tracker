import React from 'react'

const ExpenseDate = ({date}) => {
    const month = date.toLocaleString('en-US', {month: 'long'})
    const day = date.toLocaleString('en-US', {day: '2-digit'})
    const year = date.getFullYear()
  return (
    <div className='text-white text-xl font-medium bg-black/30 w-36 flex flex-col items-center py-2 border-2 rounded-xl'>
    <div>{month}</div>
    <div>{day}</div>
    <div>{year}</div>
    </div>
  )
}

export default ExpenseDate
