import api from '../utils/api';
import { setAlert } from './alert';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  GETREQUEST,
  GETFAN,
  GETCREATOR
} from './types';

// Load User
export const loadUser = () => async dispatch => {
  try {
    let token = localStorage.getItem('token');
    if(token) {
      
      const res = await api.post('/getAdmin', {token:token});
      if(res.data.user){
        const reqs = await api.post('/getReqs',{email: res.data.user.email});
        const reqCreators = reqs.data.data
        const newReqs = reqCreators.map((item, index) => {
          return {
            id: index,
            email: item.requester[0].email,
            username: item.requester[0].username? item.requester[0].username: '',
            category: item.category,
            created_on: item.created_on,
            image: item.requester[0].image,
            status: item.status,
            requester: item.requester[0]
          };
         }
        )
        dispatch({
          type: GETREQUEST,
          payload: newReqs
        });
        const reqfans = await api.post('/getFans',{email: res.data.user.email});
        const fans = reqfans.data.data
        const newFans = fans.map((item, index) => {
          item.id = index;
          item.premium = item.premium? true: false;
          item.name = item.name? item.name: '';
          item.username = item.username? item.username: '';
          return item;
         }
        )
        dispatch({
          type: GETFAN,
          payload: newFans
        });
        const reqcreators = await api.post('/getCreators',{email: res.data.user.email});
        const creators = reqcreators.data.data
        const newCreators = creators.map((item, index) => {
          item.id = index;
          item.name = item.name? item.name: '';
          item.username = item.username? item.username: '';
          return item;
         }
        )
        dispatch({
          type: GETCREATOR,
          payload: newCreators
        });
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data.user
        });
      }
      
    }
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// Register User
export const register = formData => async dispatch => {
    const res = await api.post('/register_super_user', formData);
    if(res.data.status == 1){
      localStorage.setItem('token', res.data.token)
      dispatch(loadUser());
    }else{
      dispatch(setAlert(res.data.error, 'danger'))
      dispatch({
        type: REGISTER_FAIL
      });
    }
};

// Login User
export const login = (email, password) => async dispatch => {
  const body = { email, password };
    const res = await api.post('/super_admin_login', body);
    if(res.data.status == 1){
      localStorage.setItem('token', res.data.token)
      dispatch(loadUser());
    }else{
      dispatch(setAlert(res.data.error, 'danger'))
      dispatch({
        type: LOGIN_FAIL
      });
    }
};

// Logout
export const logout = () => ({ type: LOGOUT });
