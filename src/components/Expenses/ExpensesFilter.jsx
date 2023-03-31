import React from 'react'

const ExpensesFilter = ({onChangeFilter, selected}) => {
  const dropdownHandler = (e) => {
    onChangeFilter(e.target.value)
  }
  return (
    <div>
       <div className='flex'>
         <label>Filter by year</label>
         <select value={selected} onChange={dropdownHandler}>
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
