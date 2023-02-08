import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

// 연습용 데이터이고 상태를 초기화 하는데 사용
const DUMMY_EXPENSES = [
   {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
   },
   {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12),
   },
   {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
   },
   {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
   },
];


// function으로 해도 되고 화살표 함수로 할수도 있음 
const App = () => {
   const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

   // 기본요소에 새로운 요소 추가 
   const addExpenseHandler = expense => {
      setExpenses(prevExpenses => {
         // 동일한 상태의 이전 스냅샷을 기반으로 하는 경우 
         // 우리의 상태를 업데이트할 수 있는 가장 깔끔한 방법 
         return [expense, ...prevExpenses];
      });
   }

   return (
      <div>
         <NewExpense onAddExpense={addExpenseHandler} />
         <Expenses items={expenses}/>
      </div>
   );
}

export default App;
