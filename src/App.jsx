import React from 'react'
import ExpenseItem from './components/Expenses/ExpenseItem'
import NewExpense from './components/NewExpenses/NewExpense'

const App = () => { 
  const expenses = [
    {
      id: 'e1',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2023, 3, 1),
    },
    {
      id: 'e2',
      title: 'New desk (wooden)',
      amount: 500.12,
      date: new Date(2022, 8, 12),
    },
    {
      id: 'e3',
      title: 'Toilet Paper',
      amount: 100.25,
      date: new Date(2021, 5, 7),
    }
  ]
  return (
    <div className='md:bg-black h-screen'>
       <NewExpense />
      <ExpenseItem id={expenses[0].id} title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
      <ExpenseItem id={expenses[1].id} title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
      <ExpenseItem id={expenses[2].id} title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
     
    </div>
  )
}

export default App
