import React, {useReducer, useState} from 'react';
import './App.css';
import {initialState, todoReducer} from './reducers/todoReducer'
 
function App() {
  const [state, dispatch] =  useReducer(todoReducer, initialState);
  const [tempTodoName, setTempTodoName] =  useState('');

  const handleChange = event => {
    // console.log(event.target.item, event.target.value);
    setTempTodoName(event.target.value);
  };  

  const saveNewTodo = (event) => {
    event.preventDefault();
    dispatch({ type: "ADD_TODO", item: tempTodoName, completed: false });
    setTempTodoName('');
  };
  // console.log('tempTodoName', tempTodoName)

  const toggleTodo = event => {
    dispatch({ type: 'TOGGLE_TODO', payload: event.id });
  };

  const clearCompleted = event => {
    event.preventDefault();
    dispatch({ type: 'CLEAR_TODO' });
  };
  return (
    <div className="App">
      <div>
        {state.todos.map(todo => (
          <div>
            <p className={`${todo.completed ? 'completed' : 'pending'}`} onClick={() => toggleTodo(todo)}>{todo.item}</p>
          </div>
        ))}
        </div>
        {console.log('state.todos',state.todos)}

      <form>
        <input
          type="text"
          name="item"
          onChange={handleChange}
          value={tempTodoName}
        />
        <button onClick={saveNewTodo} value={tempTodoName}>Add TODO</button>
        <button onClick={clearCompleted} >Clear complete</button>
      </form>
    </div>
  );
}

export default App;
