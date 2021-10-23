import React, { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

export const TodoCounter = () => {
    const { totalTodos, completedtTodos } = useContext(TodoContext)

    return (
        <h2>
            Has completado {completedtTodos} de  {totalTodos} TODOs
        </h2>
    )
};
