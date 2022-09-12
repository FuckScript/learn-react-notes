import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './features/counter';
import bannersReducer from './features/banners';

export default configureStore({
  reducer: {
    counter: counterReducer,
    banners: bannersReducer,
  },
});
