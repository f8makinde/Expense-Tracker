import React from 'react'
import ExpenseForm from './ExpenseForm'

const NewExpense = ({savedExpenseData}) => {
  const saveExpenseDate = (expense) =>{
    const expenseData = {
      ...expense,
      id: Math.random().toString()
    }
    savedExpenseData(expenseData)
  }
  return (
    <div>
      <ExpenseForm onSaveExpense={saveExpenseDate}/>
    </div>
  )
}

export default NewExpense
