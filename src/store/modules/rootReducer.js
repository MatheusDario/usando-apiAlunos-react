import { combineReducers } from 'redux';

import exampleReucer from './example/reducer';

export default combineReducers({
  example: exampleReucer,
});
