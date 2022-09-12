import React from 'react';
import './App.css';

const todos = [
  {text: 'Cortar cebolla', completed: false},
  {text: 'Tomar el curso de intro React', completed: false},
  {text: 'Llorar con la llorona', completed: false}
]

export const App = () => {
  return (
    <>
      {/* <TodoCounter/> */}
      <h2>Haz completado 2 de 3 TODOs</h2>
      {/* <TodoSearch /> */}
      <input placeholder='Cebolla'/>
      {/* <TodoList>
        {todos.map(todo=>(
          <TodoItem />
        ))}
      </TodoList> */}
      {/* <CreateTodoButton/> */}
      <button>+</button>
    </>
  );
}