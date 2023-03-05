import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Calc from "./components/Calc";
import TodoWidget from "./components/todo/TodoWidget";

import "./css/calc.css";
import SportDevace from "./components/sport/SportDevace";

function App(sortedTodos) {
  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     title: "До конца месяца",
  //     body: "Завершить планировщик и разобраться с api",
  //   },
  //   {
  //     id: 2,
  //     title: "До конца месяца",
  //     body: "Завершить планировщик и тут текст",
  //   },
  // ]);

  // Можно написать второй список и добавить его return как
  // <TodoList todos={todos2} title="Второй планировщик появится" />
  // const [todos2, setTodos2] = useState([
  //   {
  //     id: 1,
  //     title: "Это второй список",
  //     body: "но он закоментирован",
  //   }]);

  return (
    <div className="App">
      <Header />
      {/* <Calc /> */}

      {/* <TodoList
        //  todos={todos}
        title="Планировщик задач от Илюхи"
        
      /> */}
      {/* <TodoWidget title='Планировщик от Илюхи'/> */}
      <SportDevace />
    </div>
  );
}

export default App;
