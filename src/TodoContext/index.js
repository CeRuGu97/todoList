import React, { createContext, useState } from 'react'
import { useLocalStorage } from './useLocalSrorage';

const TodoContext = createContext();

const TodoProvider = ({ children }) => {

    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = useState('');
    const [openModal, setOpenModal] = useState(false);

    //titulo de cuantos hemos completado
    const completedtTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    //para ocupar el buscador y filtrar 
    let searchedTodos = [];
    if (!searchValue.length >= 1) {
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter((todo) => {
            const todoText = todo.text.toLowerCase();
            const seachText = searchValue.toLowerCase();
            return todoText.includes(seachText);
        })
    }

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            completed: false,
            text,
        });
        saveTodos(newTodos);
    };

    //para marcar como completados
    const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    };

    //para elimitar un TODO
    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };


    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedtTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };