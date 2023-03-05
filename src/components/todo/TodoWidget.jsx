import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoSelect from "./TodoSelect";
import InputTodoForm from "./InputTodoForm";
import TodoList from "./TodoList";
import { useMemo } from "react";
import ModalFormTodo from "./ModalFormTodo";
import ButtomTodoForm from "./ButtonTodoForm";
import axios from "axios";
import { useEffect } from "react";
import TodoSerice from "../../API/TodoService";

const TodoWidget = ({ title }) => {
  const [todosCollection, setTodosCollection] = useState([
    // {
    //   id: 1,
    //   title: "Илья",
    //   body: "Купить Лиле цветы",
    // },
    // {
    //   id: 2,
    //   title: "Лиля",
    //   body: "Купить Илье пиво",
    // },
    // {
    //   id: 3,
    //   title: "Зевс",
    //   body: "Кушать хорошо кашу и слушать маму с папой",
    // },
  ]);
  //
  // Подгрузка задач с загрузкой страницы
  useEffect(() => {
    fettchTodo();
  }, []);
  //
  // Взаимодействие с api для этого в терминале прописываем npm i axios
  // Далее будет использоваться асинхронная функция async с синтаксисом await, который отвечает за ожидание пока не загрузиться пропс
  async function fettchTodo() {
    let intervalLoader = setInterval(() => {

      setTimeout(() => {
        console.log('тик-так!')
        setLoadingText('Подождите, пожалуйста, идёт загрузка..');
      }, 500);
      setTimeout(() => {
        console.log('тик-так!')
        setLoadingText('Подождите, пожалуйста, идёт загрузка...');
      }, 1000);
      setTimeout(() => {
        console.log('тик-так!')
        setLoadingText('Подождите, пожалуйста, идёт загрузка.');
      }, 1500);
    }, 1500);
    setIsTodosLoading(true);
    setTimeout(async() => {
      const todosCollection = await TodoSerice.getAll();
      setTodosCollection(todosCollection);
      setIsTodosLoading(false);
      clearInterval(intervalLoader);
    }, 4500);


    // Заполняем посты постами которые лежат на тестовом сервере https://jsonplaceholder.typicode.com/posts


  }
  // Функция создание новой задачи
  const createTodo = (newTodo) => {
    setTodosCollection([...todosCollection, newTodo]);
    setBtnModale(false);
  };
  //   Сортировка
  // Загрузка
const [isTodosLoading, setIsTodosLoading] = useState (false);
const [loadingText, setLoadingText] = useState ('Подождите, пожалуйста, идёт загрузка.');
  // Функция сортировки массива будет реализована с помощью:
  // sort - сортировка по строке
  // localecompare() - сравнение строк
  const sortTodos = (sort) => {
    setSelectedSort(sort);
    // Если мы напишем todosCollection, то перемешаем наш массив, это делать не рекомендуется. Прописав [...todosCollection] мы мутируем копию массива
    // setTodosCollection(
    //   [...todosCollection].sort((a, b) => a[sort].localeCompare(b[sort]))
    // );
  };
  // Фультр / поиск
  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchQueryBody, setSearchQueryBody] = useState("");

  //   function getSortedTodos () {
  //     console.log('Фильтр')
  //     if (selectedSort) {
  //         return [...todosCollection].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
  //     }
  //     return todosCollection;
  //   }

  // useMemo в { } мы прописываем что необходимо расчитать, , [ ] массиве заисимости при изменение каких условий срабатывает расчёт
  const sortedTodo = useMemo(() => {
    // console.log("Фильтр");
    if (selectedSort) {
      return [...todosCollection].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    }
    return todosCollection;
  }, [selectedSort, todosCollection]);

  //  перебираем копию фильтр
  const sortedAndSearchTodo = useMemo(() => {
    if (searchQuery) {
      return sortedTodo.filter((todo) =>
        todo.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else if (searchQueryBody) {
      return sortedTodo.filter((todo) =>
        todo.body.toLowerCase().includes(searchQueryBody.toLowerCase())
      );
    }
    return sortedTodo;
  }, [searchQuery, todosCollection, sortedTodo, searchQueryBody]);

  //  Модальное окно
  const [btnModale, setBtnModale] = useState(false);
  // Функция удаления задачи
  // получаем todo из дочернего элемента
  const removeTodo = (todo) => {
    // Применяем фильтр, который нам возвращает новый массив по определённым условиям
    // если id того элемента на который мы нажали равен id из массива, то тогда этот элемент мы удаляем
    setTodosCollection(todosCollection.filter((t) => t.id !== todo.id));
  };
  // Переменные и функции для инпутов
  // Для штучных инпутов начало
  //
  // const [titleTodo, setTitleTodo] = useState("");
  // const [bodyTodo, setBodyTodo] = useState("");
  // Функция добавления задачи по клику
  // const addNewTodo = (e) => {
  //   // Так как у нас кнопка в форме, происходит обновление страницы, для этого отключим стандартное обнолвение type={submit} с помощью e.preventDefault()
  //   e.preventDefault();
  //   // создаё шаблон объекта
  //   const newTodo = {
  //     id: Date.now(),
  //     titleTodo,
  //     bodyTodo
  //   }
  //   setTodosCollection([...todosCollection, newTodo])
  //   setTitleTodo('')
  //   setBodyTodo('')
  // };
  // Для штучных инпутов конец
  //
  // Для инпутов в наборе объекта
  // Созданиее новой задачи в текущем компоненте
  // const addNewTodo = (e) => {
  // // Так как у нас кнопка в форме, происходит обновление страницы, для этого отключим стандартное обнолвение type={submit} с помощью e.preventDefault()
  // e.preventDefault();
  // setTodosCollection([...todosCollection, {...todoObj, id: Date.now()}])
  // setTodoObj({titleTodo: '', bodyTodo: ''})
  // }
  return (
    <div className="todo-container">
      <h1>{title}</h1>
      {/*  */}
      {/* Ручная кнопка подгрузки постов */}
      {/* <button onClick={fettchTodo}>Подгрузить посты</button> */}
      {/* Кнопка вызова модального окна */}
      <ButtomTodoForm onClick={() => setBtnModale(true)}>
        Создать задачу
      </ButtomTodoForm>
      {/*  */}
      <ModalFormTodo visible={btnModale} setVisible={setBtnModale}>
        {/* Форма ввода в TodoList */}
        {/* Создаём пропс create который будет принимать функцию createTodo */}
        <TodoForm create={createTodo} />
      </ModalFormTodo>
      {/*  */}
      {/* Сортировка по существующим параметрам (например: по на заванию) */}
      {/*  */}
      {/* Поиск / фильтрация */}
      <InputTodoForm
        placeholder="Поиск по ответственному..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <InputTodoForm
        placeholder="Поиск по задаче..."
        value={searchQueryBody}
        onChange={(e) => setSearchQueryBody(e.target.value)}
      />
      {/* Сортировка */}
      <div>
        <TodoSelect
          value={selectedSort}
          // Функция сортировки массива
          onChange={sortTodos}
          // Имя сортирови по умолчанию
          defaultValue={"Сортировка"}
          // Добавляем массив со значениями сортировки
          options={[
            { value: "title", name: "По заголовку" },
            { value: "body", name: "По описанию" },
          ]}
        />
      </div>
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
      {/* <InputTodoForm
            value={todoObj.titleTodo}
            // Отслеживае, что вводит пользователь в инпут
            // Внутри функции разворачиваем объект
            onChange={e => setTodoObj({...todoObj, titleTodo: e.target.value})}
            type="text"
            placeholder="Название задачи"
          />
          <InputTodoForm
            value={todoObj.bodyTodo}
            // Отслеживае, что вводит пользователь в инпут
            onChange={e => setTodoObj({...todoObj, bodyTodo: e.target.value})}
            type="text"
            placeholder="Описание задачи"
          />
          {/*  */}
      {/* <ButtomTodoForm onClick={addNewTodo}>Создать задачу</ButtomTodoForm> */}
      {/* Конец форы ввода через TodoList */}
      {/* Выводим копонент TodoItem и через пропсы прописываем там данные по задачам НЕ через массив*/}
      {/* <TodoItem
          todo={{id: 1, title: "До конца месяца", body: "Завершить планировщик и разобраться с api"}}
        />
        <TodoItem todo={{id: 2, title: "До конца месяца", body: "Завершить планировщик и тут текст"}}
        /> */}
      {/* Выводим копонент TodoItem и через пропсы прописываем там данные по задачам ЧЕРЕЗ массив*/}
      {/* {todos} */}
      {/* Выводим копонент TodoItem и через пропсы прописываем там данные по задачам ЧЕРЕЗ массив*/}
      {/* Собираем массив из элементов другого массива*/}
      {/* number - обавляем index чтобы отслеживать id задач */}
      {/* Удаление из массива вешаем функцию remove */}
      {/* Отрисовка по условию, в идеале делать не так */}

      {/* {sortedAndSearchTodo.length !== 0 ? ( */}
      {isTodosLoading
      ? <h1>{loadingText}</h1>
      : <TodoList todosCollection={sortedAndSearchTodo} remove={removeTodo} />
      }      
      {/* //   ) : (
    //     <h1>Заданий для Ильи нет</h1>
    //   )} */}

      {/* <TodoList todosCollection={todosCollection} remove={removeTodo} /> */}
    </div>
  );
};

export default TodoWidget;
