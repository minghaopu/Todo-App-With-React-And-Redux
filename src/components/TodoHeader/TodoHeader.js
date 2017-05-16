import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import {
  changeText,
  createTodo,
} from '../../actions';

const TodoHeder = ({
  onChangeText,
  onCreateTodo,
  todo,
}) => (
  <div>
    <h1>TodoHeader</h1>
    <input type="text" name="todo" value={todo.get('text')} onChange={onChangeText} />
    <button onClick={onCreateTodo}>submit</button>
  </div>
);

const mapStateToProps = (state) => ({
  todo: state.getIn(['todo', 'todos'])
});

const mapDispatchToProps = (dispatch) => ({
  onChangeText: (event) => {
    dispatch(changeText({ text: event.target.value }));
  },
  onCreateTodo: () => {
    dispatch(createTodo());
    dispatch(changeText({ text: '' }));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoHeder);