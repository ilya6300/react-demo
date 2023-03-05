import React from "react";
import TodoItem from "./TodoItem";
import "../UI/css/todo.css";
import { TransitionGroup,CSSTransition  } from "react-transition-group";
// import ButtomTodoForm from "./ButtonTodoForm";
// import InputTodoForm from "./InputTodoForm";

// Это основание, куда будут добавляться задачи.
const TodoList = ({ todosCollection, remove }) => {
  // Отрисовка по условию
  if (!todosCollection.length) {
    return <h1>Задачи не найдены</h1>;
  }
  return (
    <div>
      {/*  */}
      <TransitionGroup>
        {todosCollection.map((todo, index) => (
          // Для анимации мы можем воспользоваться React Transition Group
          <CSSTransition key={todo.id} timeout={500} classNames="todo">
            <TodoItem
              // Создаём пропс remove и заряжае в него функцию removeTodo
              remove={remove}
              number={index + 1}
              todo={todo}
              // Если используем с без анимации, то ключ прописываем здесь
              // key={todo.id}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default TodoList;
