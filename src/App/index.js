import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';
// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: false },
//   { text: 'tarea 2', completed: true },
//   { text: 'tarea 3', completed: false },
//   { text: 'tarea 4', completed: false },
// ]

const App = () => {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  )
}

export default App;
