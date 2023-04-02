import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'

const NewExpense = ({savedExpenseData}) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDate = (expense) =>{
    const expenseData = {
      ...expense,
      id: Math.random().toString()
    }
    savedExpenseData(expenseData)
    setIsEditing(false);
  }
  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className='max-w-[1100px] mx-auto'>
      {!isEditing && (
      <button type='submit' className='bg-green-800 rounded-xl p-3 m-4 text-white  text-xl' onClick={startEditingHandler}>Add New Expenses</button>
    )}
  
      {isEditing && (
      <ExpenseForm onSaveExpense={saveExpenseDate} onCancel={stopEditingHandler}/>
    )}
    </div>
  )
}

export default NewExpense
