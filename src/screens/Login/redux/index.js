import {action, persist} from 'easy-peasy';
import AsyncStorage from '@react-native-community/async-storage';

export const storeLogin = persist(
  {
    //state
    token: '',
    //action
    setToken: action((state, payload) => (state.token = payload)),
  },
  {whitelist: ['token'], storage: AsyncStorage, mergeStrategy: 'merge'},
);
