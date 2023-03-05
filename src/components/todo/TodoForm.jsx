import React, { useState } from "react";
import ButtomTodoForm from "./ButtonTodoForm";
import InputTodoForm from "./InputTodoForm";

// пробрасываем пропс для работы с функцией create, для создания новой задачи в компонент todo list
const TodoForm = ({ create }) => {
  const [todoObj, setTodoObj] = useState({ title: "", body: "" });
  // Создаё новое задание в другой компонент через кэлбэк
  const addNewTodo = (e) => {
    // Так как у нас кнопка в форме, происходит обновление страницы, для этого отключим стандартное обнолвение type={submit} с помощью e.preventDefault()
    e.preventDefault();
    const newTodo = {
      ...todoObj,
      id: Date.now(),
    };
    //   Передаём в функцию create объект new todo
    if (todoObj.bodyTodo === "") {
      return;
    } 
create(newTodo);
   
    setTodoObj({ title: "", body: "" });
  };

  return (
    <form>
      {/* Штучные инпуты, не через объект */}
      {/* <InputTodoForm
        value={titleTodo}
        // Отслеживае, что вводит пользователь в инпут
        onChange={(e) => setTitleTodo(e.target.value)}
        type="text"
        placeholder="Название задачи"
      />
      <InputTodoForm
        value={bodyTodo}
        // Отслеживае, что вводит пользователь в инпут
        onChange={(e) => setBodyTodo(e.target.value)}
        type="text"
        placeholder="Описание задачи"
      /> */}
      {/*  */}
      {/* // Для инпутов в наборе объекта */}
      <InputTodoForm
        value={todoObj.title}
        // Отслеживае, что вводит пользователь в инпут
        // Внутри функции разворачиваем объект
        onChange={(e) => setTodoObj({ ...todoObj, title: e.target.value })}
        type="text"
        placeholder="Ответственный"
      />
      <InputTodoForm
        value={todoObj.body}
        // Отслеживае, что вводит пользователь в инпут
        onChange={(e) => setTodoObj({ ...todoObj, body: e.target.value })}
        type="text"
        placeholder="Описание задачи"
      />
      {/*  */}
      <ButtomTodoForm onClick={addNewTodo}>Создать задачу</ButtomTodoForm>
    </form>
  );
};

export default TodoForm;
