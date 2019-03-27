// @flow
import { combineReducers } from 'redux';
import counter from './counter';

export default function createRootReducer(history: History) {
  return combineReducers({
    counter
  });
}
