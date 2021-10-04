import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import post from './post';
import request from './request';
import fan from './fan';
import creator from './creator';

export default combineReducers({
  alert,
  auth,
  profile,
  post,
  request,
  fan,
  creator
});
