'use strict';

import { combineReducers } from 'redux';
import { ADD_MESSAGE } from './actions';

function messages(state = [], action = null) {
  switch (action.type) {
    case ADD_MESSAGE:
      return [
        ...state,
        {
          text: action.text
        }
      ];
    default:
      return state;
  }
}

const chatApp = combineReducers({
  messages
});

export default chatApp
