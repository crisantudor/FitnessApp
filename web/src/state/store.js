// store.js

import { configureStore } from '@reduxjs/toolkit';
import persistedReducer from './persistenceConfig';
import { persistStore } from 'redux-persist';

const store = configureStore({
  reducer: persistedReducer,
  // Any other store configuration options
});

const persistor = persistStore(store);

export { store, persistor };
