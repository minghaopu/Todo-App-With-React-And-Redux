import { handleActions } from 'redux-actions';
import UiState from '../../constants/model';

export default handleActions({
  SHOW: (state, { payload }) => (
    state.set('todos', payload.todo)
  ),
}, UiState); 