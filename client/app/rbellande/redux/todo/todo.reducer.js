import { initialState } from './todo.state';
import { todo } from './todo.actions';

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case todo.types.ADD_SUCCESS: {
      return todo.actions.addSuccess(state, action.payload);
    };
    default:
      break;
  }
};
