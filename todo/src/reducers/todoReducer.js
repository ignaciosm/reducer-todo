

export const initialState = { 
  todos: [{
      item: 'Learn about reducers',
      completed: false,
      id: 3892987589
    }],
};

export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      {
        const newTodo = {
          item: action.item,
          completed: action.completed,
          id: Number(new Date())
        };
        return {
          todos: [...state.todos, newTodo],
        };
      }
    case 'TOGGLE_TODO':
        return { 
            ...state,
            todos: state.todos.map(todo => {
                if (todo.id === action.payload) {
                    return { ...todo, completed: !todo.completed };
                } else {
                    return todo;
                }
            })
          };      

    case 'CLEAR_TODO':
        return { todos: state.todos.filter(todo => !todo.completed) };
                      
    default:
      return state;
  }
}