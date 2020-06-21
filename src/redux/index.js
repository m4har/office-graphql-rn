import {createStore} from 'easy-peasy';
import {storeLogin} from '../screens/Login/redux';

const storeModel = {auth: storeLogin};

export const store = createStore(storeModel);

if (process.env.NODE_ENV === 'development') {
  // reconfig hot reload development
  if (module.hot) {
    module.hot.accept(() => {
      store.reconfigure(storeModel);
    });
  }
}
