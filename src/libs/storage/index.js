import AsyncStorage from '@react-native-community/async-storage';

const getFromstorage = async (key) => await AsyncStorage.getItem(key);

const saveToStorage = async (key, value) => {
  try {
    return await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log(error);
  }
  return null;
};

const clearStorage = async () => AsyncStorage.clear();

const storage = {
  get: (key) => getFromstorage(key),
  set: (key, value) => saveToStorage(key, value),
  clear: () => clearStorage(),
};

export default storage;