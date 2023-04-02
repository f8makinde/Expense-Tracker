import React, { useState } from 'react'

const ExpenseForm = ({onSaveExpense, onCancel}) => {
  const [enterTitle, setEnterTitle] = useState('')
  const [enterAmount, setEnterAmount] = useState('')
  const [enterDate, setEnterDate] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const expenseData = {
        title: enterTitle,
        amount: enterAmount,
        date: new Date(enterDate)
    }
    // console.log(expenseData)
    onSaveExpense(expenseData)
    setEnterTitle('')
    setEnterAmount('')
    setEnterDate('')
   
  }

  return (
    <form onSubmit={handleSubmit} className='bg-green-700'>
        <div className='flex md:flex-row flex-col justify-between p-3 max-w-[1100px]  mx-auto'>

        
        <div className='flex flex-col'>
            <label className='text-white'>Title</label>
            <input type='text' className='p-3' placeholder='Enter title' onChange={(e) => {
                setEnterTitle(e.target.value)
            }} value={enterTitle}/>
        </div>
        <div  className='flex flex-col'>
        <label className='text-white'>Amount</label>
            <input type='number' min='0.01' step='0.01' className='p-3' placeholder='Enter number'
             onChange={(e) =>{
               setEnterAmount(e.target.value)
            }} value={enterAmount}/> 
        </div>
        <div  className='flex flex-col'>
        <label className='text-white'>Date</label>
            <input type='date' min='2020-01-01' max='2023-12-31 ' className='p-3' 
            onChange={(e) => {
                setEnterDate(e.target.value)
            }} value={enterDate}/>
        </div>
        <div>
       
    </div>

    </div>
    <div className='flex justify-center'>
   <button type="button" onClick={onCancel}  className=' bg-green-800 rounded-xl p-3 m-4 text-white w-36 text-xl'>Cancel</button>
        <button type='submit' className=' bg-green-800  w-36 rounded-xl p-3 m-4 text-white  text-xl'>Add Expense</button>
   </div>
   
    </form>
  )
}

export default ExpenseForm
