import { useState, useLayoutEffect } from 'react';
import { setIn, getIn, removeIn } from 'immutable';
import { emptyProfile } from '../data/data';
let state = {
  newProfile: { ...emptyProfile, valid: 0 },
};

export const set = (path: string[], value: Object) => {
  state = setIn(state, path, value);
};

export const remove = (path: string[]) => {
  state = removeIn(state, path);
};

export const setInternal = (path: string[], value: Object) => {
  state = setIn(state, path, value);
  updateSetters(path, value);
  updateLocalStorage();
};

export const updateSetters = (path: string[], value: Object) => {
  (get(['setters', path.join('.')]) ?? []).forEach((setter: any) => {
    setter(value);
  });
};

export const registerSetter = (path: string[], setter: any) => {
  const curpath = ['setters', path.join('.')];
  set(curpath, [...(get(curpath) ?? []), setter]);
};

export const unregisterSetter = (path: string[], setter: any) => {
  const curpath = ['setters', path.join('.')];
  set(
    curpath,
    get(curpath).filter((s: any) => s !== setter),
  );
};

export const get = (path: string[]) => {
  return getIn(state, path, null);
};

export const useStore = (path: string[], defaultValue: Object) => {
  const [val, setVal] = useState(get(path) || defaultValue);
  const setValue = (value: string) => {
    setInternal(path, value);
  };

  useLayoutEffect(() => {
    registerSetter(path, setVal);
    return () => {
      unregisterSetter(path, setVal);
    };
  }, [path]);
  return [val, setValue];
};

export const add = (path1: string[], path2: string[]) => {
  set(path1, { ...get(path2) });
};

export const clear = (path: string[]) => {
  const curVal = get(path);
  if (Array.isArray(curVal)) {
    setInternal(path, []);
  } else if (typeof curVal === 'object') {
    Object.keys(curVal).forEach((key) => {
      clear([...path, key]);
    });
  } else {
    setInternal(path, '');
  }
};

const updateLocalStorage = () => {
  try {
    localStorage.setItem(
      '_profiles',
      JSON.stringify({ ...state, setters: {} }),
    );
  } catch (e) {}
};

const localState = localStorage.getItem('_profiles');
if (localState != null) {
  state = JSON.parse(localState);
  console.log(state);
}
