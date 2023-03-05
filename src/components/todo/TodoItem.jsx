import React from "react";
import "../UI/css/todo.css";
// Прокидываем props чтобы потом в дальнейшем использовать их при выводе компонента в другом месте
const TodoItem = (props) => {
  //
  return (
    <div>
      <div className="todo">
        <div className="todo-text-container">
          {/* Указываем какие параметры можем передавать через пропсы */}
          <strong>
            {props.number} - Ответственный: {props.todo.title}
          </strong>
          <p className="todo-text">{props.todo.body}</p>
        </div>
        <button className="todo-bottom"
        // Принимаем пропс remove и через пропс пропускаем todo
        onClick={() => props.remove(props.todo) 
        }
        
        >
          Выполнено
          </button>
      </div>
    </div>
  );
};
export default TodoItem;
