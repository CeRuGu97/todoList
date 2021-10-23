import React, { useContext } from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import './App.css';


const AppUI = () => {
    const { error, loading, searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal } = useContext(TodoContext);
    return (
        <div className="main__master">
            <TodoCounter />
            <TodoSearch />

            <TodoList>
                {error && <p>ups hubo un error</p>}
                {loading && <p>Estamos cargando...</p>}
                {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO...</p>}

                {searchedTodos.map((todo, index) => (
                    <TodoItem
                        key={todo.text + index}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>
            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}
            <CreateTodoButton
                setOpenModal={setOpenModal}
            />
        </div>
    )
}

export { AppUI };
