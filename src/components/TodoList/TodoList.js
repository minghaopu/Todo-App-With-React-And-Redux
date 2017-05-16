import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { deleteTodo } from '../../actions';

const TodoList = ({
  todos,
  onDeleteTodo,
}) => (
  <div>
    <ul>
      {
        todos.map((todo, index) => (
          <li key={index}>
            {todo.get('text')}
            <button onClick={onDeleteTodo(index)}>X</button>
          </li>
        )).toJS()
      }
    </ul>
  </div>
);

export default connect(
  (state) => ({
    todos: state.getIn(['todo', 'todos'])
  }),
  (dispatch) => ({
    onDeleteTodo: (index) => () => (
      dispatch(deleteTodo({ index }))
    )
  })
)(TodoList);