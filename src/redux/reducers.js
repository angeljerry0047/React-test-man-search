import { combineReducers } from 'redux';
import common from './common/reducer';
import menu from './menu/reducer';
import settings from './settings/reducer';

const reducers = combineReducers({
  common,
  settings,
  menu
});

export default reducers;
