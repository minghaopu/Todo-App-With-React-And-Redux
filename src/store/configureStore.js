import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import immutable from 'immutable';
import rootReducer from '../reducers';

const initialState = immutable.Map();
const logger = createLogger();

export default createStore(
  rootReducer,
  initialState,
  applyMiddleware(logger)
);
