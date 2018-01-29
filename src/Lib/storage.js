import { AsyncStorage } from 'react-native';

const get = (key) => {
  return AsyncStorage.getItem(key);
};

const set = (key, value) => {
  return AsyncStorage.setItem(key, value);
};

const remove = (key, value) => {
  return AsyncStorage.removeItem(key);
};

const clear = () => AsyncStorage.clear();

export {
  get,
  set,
  clear,
  remove,
}