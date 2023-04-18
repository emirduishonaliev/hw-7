import React from "react";
import "./App.css";
import { NewExpense } from "./components/new-expense/NewExpense";
import { Expenses } from "./components/expenses/Expenses";
import { useState } from "react";

function App() {
  const [newExpense, setNewExpense] = useState([
    {
      id: "1",
      title: "Рюкзак",
      price: 120,
      date: new Date("2023, 2, 9"),
    },
  ]);

  const addNewExpense = (data) => {
    setNewExpense([...newExpense, data]);
  };
  return (
    <div className="App">
      <NewExpense addNewExpense={addNewExpense} />
      <Expenses newExpense={newExpense} />
    </div>
  );
}



export default App;