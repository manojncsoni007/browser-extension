import React, { useState, useEffect } from 'react'
import { v4 as uuid } from "uuid";
import { RiTodoLine } from "react-icons/ri";
import { FaTimes } from "react-icons/fa";
import './ToDo.css'

const ToDo = () => {
    const [showTodo, setShowTodo] = useState(false);
    const [todo, setTodo] = useState('');
    const [todoList, setTodoList] = useState(
        localStorage.getItem("todoList") ? JSON.parse(localStorage.getItem("todoList")) : []
    );

    const addTodoHandler = () => {
        setTodoList([
            ...todoList, { id: uuid(), item: todo, strike: false }
        ]);
        setTodo('');
    }
    
    const strikeHandler = (id) => {
        const temp = todoList.map((todo) =>
        todo.id === id ? {...todo, strike : !todo.strike} : todo )
       setTodoList(temp);
    }

    const deleteTodoHandler = (id) => {
        setTodoList(todoList.filter((item) => item.id !== id))
    }

    useEffect(() => {
        localStorage.setItem("todoList", JSON.stringify(todoList));
    }, [todoList]);

    return (
        <>
            <div className='todo'>
                <div className='todo-container' onClick={() => setShowTodo(!showTodo)}>
                    <RiTodoLine size='2rem' />
                    <p>ToDo</p>
                </div>
                {showTodo &&
                    <div className='todo-list'>
                        <h3>ToDo</h3>
                        <div className="todo-item-container">
                            {todoList &&
                                todoList.map((todo) => (
                                    <div className='todo-item' key={todo.id}>
                                        <div>
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    checked={todo.strike}
                                                    onChange={() => strikeHandler(todo.id)} />
                                                <span className={todo.strike ? 'checked' : ''}>{todo.item}</span>
                                            </label>
                                        </div>
                                        <FaTimes className='icon' onClick={() => deleteTodoHandler(todo.id)} />
                                    </div>
                                ))
                            }
                        </div>
                        <div className='todo-input'>
                            <input
                                type="text"
                                value={todo}
                                onChange={(e) => setTodo(e.target.value)} />
                            <button onClick={addTodoHandler}>Add</button>
                        </div>
                    </div>}
            </div>



        </>
    )
}

export { ToDo }
