import React from 'react'
import cl from '../UI/css/ModalFormTodo.module.css'

// Прописываем visible для скрывание модального окна
const ModalFormTodo = ({children, visible, setVisible}) => {
// Массив где храниться начальный класс modalBlock
const visibleClasses = [cl.modalBlock]
// Если переменная visible активна, то мы добавляем класс active
if (visible) {
  visibleClasses.push(cl.active);
}

  return (
    // onClick={() => setVisible(false)} - при клике (по задумке) на тёмную область (мимо модельного окна) оно должно закрываться, но в данной ситуации будет закрываться и при нажатие на модальное окно
    <div className={visibleClasses.join(' ')} onClick={() => setVisible(false)}>
      {/* Что бы при клике на модальное окно не закрывалось, мы можем повесить на модальное окно Event.stopPropagation() - Прекращает дальнейшую передачу текущего события. */}
        <div className={cl.modalContent} onClick={(e) => e.stopPropagation()}>
            {children}
        </div>
    </div>
  )
}

export default ModalFormTodo;