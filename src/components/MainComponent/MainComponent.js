import React from 'react';
import ReactDOM from 'react-dom';
import TodoHeaderContainer from '../../containers/TodoHeaderContainer';
import TodoListContainer from '../../containers/TodoListContainer';

const MainComponent = () => (
  <div>
    <TodoHeaderContainer />
    <TodoListContainer />
  </div>
)

export default MainComponent;
