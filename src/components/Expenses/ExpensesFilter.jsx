import React from 'react'

const ExpensesFilter = ({onChangeFilter, selected}) => {
  const dropdownHandler = (e) => {
    onChangeFilter(e.target.value)
  }
  return (
    <div>
     <div className='flex md:flex-row flex-col justify-between p-6 max-w-[1100px] mx-auto bg-green-700'> 
         <label className='text-xl text-white'>Filter by year</label>
         <select value={selected} onChange={dropdownHandler} className='w-36 py-3 rounded-md indent-2 outline-none'>
            <option value="2023">{2023}</option>
            <option value="2022">{2022}</option>
            <option value="2021">{2021}</option>
            <option value="2020">{2020}</option>
         </select>
       </div>
    </div>
  )
}

export default ExpensesFilter
