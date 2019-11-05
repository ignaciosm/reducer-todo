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
  return (
    <div className="App">
      <div>
        {state.todos.map(todo => {
          return (
            <p>{todo.item}</p>
          )
        })}
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
      </form>
    </div>
  );
}

export default App;
