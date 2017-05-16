import { handleActions } from 'redux-actions';
import { TodoState } from '../../constants/model';

import {
  CREATE_TODO,
  DELETE_TODO,
  CHANGE_TEXT,
} from '../../constants/actionTypes';

const todoReducer = handleActions({
  CREATE_TODO: (state) => {
    let todos = state.get('todos').push(state.get('todo'));
    return state.set('todos', todos);
  },
  DELETE_TODO: (state, { payload }) => {
    return state.set('todos', state.get('todos').splice(payload.index, 1));
  },
  CHANGE_TEXT: (state, { payload }) => {
    return state.merge({ 'todo': payload });
  }
}, TodoState);

export default todoReducer;