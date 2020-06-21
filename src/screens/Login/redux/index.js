import {action, persist} from 'easy-peasy';
import AsyncStorage from '@react-native-community/async-storage';
import {SET_TOKEN, ERROR_TOKEN} from './types';

export const storeLogin = persist(
  {
    //state
    token: '',
    //action
    setToken: action((state, payload) => (state.token = payload)),
  },
  {whitelist: ['token'], storage: AsyncStorage, mergeStrategy: 'merge'},
);
