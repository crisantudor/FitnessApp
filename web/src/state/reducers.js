import { combineReducers } from 'redux';
import appReducer from './slices/appSlice';
import userReducer from './slices/userSlice';

const rootReducer = combineReducers({
  app: appReducer,
  user: userReducer,
});

export default rootReducer;
