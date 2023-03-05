import React from 'react'
import classes from '../UI/css/InputTodoForm.module.css';

const InputTodoForm = (props) => {
  return (
    // Прописываем {...props} чтобы передавать атрибуты через копонент, куда мы добавляем input
    <input {...props} className={classes.inputTodoForm} placeholder={props.placeholder}/>
  )
}

export default InputTodoForm