'use strict';

export const ADD_MESSAGE = 'ADD_MESSAGE';

export function addTodo(text) {
  return { type: ADD_MESSAGE, text };
}
