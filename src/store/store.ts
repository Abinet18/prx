import { useState } from 'react';
import { setIn, getIn } from 'immutable';
import { emptyProfile } from '../data/data';
let state = {
  newProfile: emptyProfile,
};

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

export const add = (path1: string[], path2: string[]) => {
  set(path1, { ...get(path2) });
};
