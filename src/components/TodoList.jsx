// TodoList.js
import React, { useState, useEffect } from 'react';
import Button from "./button/Button.jsx";


const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isEditing, setIsEditing] = useState(null);
    const [editValue, setEditValue] = useState('');

    // Загрузка задач из localStorage при первой загрузке компонента
    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(storedTodos);
    }, []);

    // Сохранение задач в localStorage при каждом изменении списка
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleAddTodo = () => {
        if (inputValue.trim()) {
            setTodos([...todos, inputValue]);
            setInputValue('');
        }
    };

    const handleDeleteTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    const handleEditTodo = (index) => {
        setIsEditing(index);
        setEditValue(todos[index]);
    };

    const handleSaveEdit = (index) => {
        const updatedTodos = [...todos];
        updatedTodos[index] = editValue;
        setTodos(updatedTodos);
        setIsEditing(null);
    };

    const handleCancelEdit = () => {
        setIsEditing(null);
    };

    const handleClearAll = () => {
        setTodos([]); // Удаление всех задач
    };

    return (
        <div>
            <h1>Todo List</h1>
            <div className="todo-input">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Add a new task"
                />
                <Button onClick={handleAddTodo}>Add</Button>
                <Button onClick={handleClearAll} className="clear-all-btn">Delete All</Button>
            </div>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index} className="todo-item">
                        {isEditing === index ? (
                            <>
                                <input
                                    type="text"
                                    value={editValue}
                                    onChange={(e) => setEditValue(e.target.value)}
                                />
                                <Button onClick={() => handleSaveEdit(index)} className="save-btn">Save</Button>
                                <Button onClick={handleCancelEdit} className="cancel-btn">Cancel</Button>
                            </>
                        ) : (
                            <>
                                <span>{todo}</span>
                                <Button onClick={() => handleEditTodo(index)} className="edit-btn">Edit</Button>
                                <Button onClick={() => handleDeleteTodo(index)} className="delete-btn">Delete</Button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
