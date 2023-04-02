import React, { useState } from 'react'
import ExpenseItem from './components/Expenses/ExpenseItem'
import ExpensesFilter from './components/Expenses/ExpensesFilter'
import NewExpense from './components/NewExpenses/NewExpense'
const Expenses = [
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
const App = () => { 
  const [expenses, setExpenses] = useState(Expenses)

  
  const expenseData = (expense) => {
    setExpenses(prevState => {
      return [expense, ...prevState]
    })
    
  }
  const [filterYear, setFilterYear] = useState('2020')
  const filterChangeHandler = selectedYear => {
    setFilterYear(selectedYear)
  }
  const filteredExpenses = expenses.filter((expense) =>{
    return expense.date.getFullYear().toString() === filterYear
  })
  return (
    <div className='md:bg-black h-screen'>
       <NewExpense savedExpenseData={expenseData}/>
       <ExpensesFilter selected={filterYear} onChangeFilter={filterChangeHandler}/>
       {filteredExpenses.length === 0 && <p className='text-white text-center'>No expenses found</p>}
       {filteredExpenses.length > 0 &&
       filteredExpenses.map((expense) => { 
        return  <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}/>
    
       })
       
       }
     
    </div>
  )
}

export default App
