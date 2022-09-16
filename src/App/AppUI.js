import React from "react";
import { TodoCounter } from "../components/TodoCounter";
import { TodoContext } from "../TodoContext"; 
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButtom";
import {Modal} from "../modal/index"
import {TodoForm} from "../components/TodoForm"
import './App.css';

function AppUI() {
    const { 
        error, 
        loading, 
        searchedTodos, 
        completeTodo, 
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
                <TodoList>
                        {error && <p>Desespérate, hubo un error...</p>}
                        {loading && (<div className="icono"><p style={{fontSize: '2rem'}}>Cargando... Por favor espere.</p><i style={{fontSize: '10rem'}} className="fas fa-spinner"></i></div>)}
                        {(!loading && !searchedTodos.length) && (<div className="icono"><p style={{fontSize: '2rem'}}>¡Crea tu primer TODO!</p><i style={{fontSize: '10rem'}} className="fas fa-cloud-upload-alt jump"></i></div>)}    
                        {searchedTodos.map(todo => (
                        <TodoItem
                            key={todo.text}
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={() => completeTodo(todo.text)}
                            onDelete={() => deleteTodo(todo.text)}
                        />
                        ))}
                </TodoList>
                {!!openModal && (
                    <Modal>
                        <TodoForm/>
                    </Modal>
                )}
            <CreateTodoButton 
                setOpenModal={setOpenModal}
            />
        </React.Fragment>
    )
}

export {AppUI}