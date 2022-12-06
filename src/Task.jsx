import React from 'react';
import Input from './components/input/Input';
import Button from './components/button/Button';
import './Task.css';
import { useState } from 'react';
let nextId = 0;

function Task(){
      const [task, setTask] = useState('');
      const [todos, setTodos] = useState([]);
      const pushClick = () => {
        setTask('');
        setTodos([
          ...todos,
          { id: nextId++, task: task }
        ]);
      }

      const filterClick = (todo) => { 
        setTodos(
          todos.filter((t) => t !== todo)
        );
      }

    
      return (
        <div className="Todo">
            <div className="Input">
          <h1>To do list:</h1>
          <input
        value={task}
        onChange={e => setTask(e.target.value)}
      />
      <Button fungsi={pushClick} namaFungsi="Add"/>
            </div>

    <div className="Result">
    <h1>You need to do:</h1>
    <h1>---------------------</h1>
    <br/>
    <ul>
        { todos.map(todo => (
          <li key={todo.id}>
            {todo.task}{' '}
            <Button fungsi={() => {filterClick(todo)}} namaFungsi="Delete"/>
            {/* <button onClick={() => {
              setTodos(
                todo.filter(a =>
                  a.id !== todo.id
                )
              );
            }}>
              Delete
            </button> */}
          </li>
        ))}
      </ul>
          </div>
        </div>
      );
    

};

export default Task;