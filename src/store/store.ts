import { useState } from 'react';
import { setIn, getIn } from 'immutable';
let state = {};

export const set = (path: string[], value: Object) => {
  state = setIn(state, path, value);
  console.log('setting data in path', path, value, state);
};

export const get = (path: string[]) => {
  console.log('displaying state in store', state);
  return getIn(state, path, null);
};

export const useStore = (path: string[], defaultValue: Object) => {
  const [val, setVal] = useState(get(path) || defaultValue);
  const setValue = (value: string) => {
    set(path, value);
    setVal(value);
  };
  return [val, setValue];
};
