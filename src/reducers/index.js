import login from './login';
import themeModeReducer from './themeMode';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    login,
    theme:themeModeReducer,
}); 

export default allReducers;