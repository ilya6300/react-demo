import React from "react";
import "../UI/css/todo.css";

// Если на странице app нет вложенных объектов, необходимо применить чтение дочерних элементов через children
// Пеердаём ...props, чтобы мы могли изменять состояние напрямую через страницу app или иные компоненты
const ButtonTodoForm = ({children, ...props}) => {
// Пеердаём ...props, чтобы мы могли изменять состояние напрямую через страницу app или иные компоненты, например такие как disabled чтобы отключить кнопку 
  return <button {...props} className="Button-Todo-Form">
    {/* Если на странице app нет вложенных объектов, необходимо применить чтение дочерних элементовчерез children*/}
    {children}
  </button>;
};

export default ButtonTodoForm;
