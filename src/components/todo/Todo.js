import React, { useState } from 'react';
import classes from './Todo.module.scss';
import Button from '../button/Button';


const Todo = ({ todo, handleDone, handleDelete, setCurrentId, isEdit, handleEdit }) => {

    const [ inputValue, setInputValue ] = useState(todo.title);
    return (
        <>
            <li className={`${classes.li} ${todo.completed && classes.done}`}>
                <div className={classes.info}>
                    <p>id: {todo.id}</p>
                    <p>title: {todo.title}</p>
                </div>
                <div className={classes.btns}>
                    <Button title={'Edit'} action={() => setCurrentId(todo.id)}/>
                    <Button title={'Done'} color={'Secondary'} action={() => handleDone(todo.id)}/>
                    <Button title={'Delete'} color={'error'} action={() => handleDelete(todo.id)}/>
                </div>
            </li>
            {
                isEdit && <div className={classes.edit}>
                    <input
                        type="text"
                        onChange={(e) => setInputValue(e.target.value)}
                        value={inputValue}
                    />
                    <Button title={'save'} action={() => {
                        handleEdit({
                            ...todo,
                            title: inputValue
                        });
                        setCurrentId(null);
                    }
                    }/>
                    <Button title={'cancel'} action={() => setCurrentId(null)} color={'error'}/>
                </div>
            }

        </>
    );
};

export default Todo;