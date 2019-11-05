

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
    default:
      return state;
  }
}