import React from 'react'

// Сортировка по заданным параметрам
const TodoSelect = ({options, defaultValue, value, onChange}) => {
  return (
    // select стандартный выпадающий список
    <select 
    value={value}
    // Отслеживаем value которое выбрали
    onChange={event => onChange(event.target.value)}
    >
        {/* disabled - отключаем выбор заголовка по умолчанию */}
        {/* Заголовокпо умолчанию */}
        <option disabled value="">{defaultValue}</option>
        {/* Собираем из наших option список */}
        {options.map(option =>
        // Так как данная сортировка у нас статичная, можно использовать key по названию
            <option key={option.value} value={option.value}>
                {option.name}
            </option>
            )}
    </select>
  )
}
export default TodoSelect;