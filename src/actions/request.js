import api from '../utils/api';
import {
  UPDATEREQUEST
} from './types';


// update req User
export const updateReq = (email, status) => async dispatch => {
  const body = { email, status };
  console.log(body)
    // const res = await api.post('/super_admin_login', body);
    // if(res.data.status == 1){
    //   localStorage.setItem('token', res.data.token)
    //   dispatch(loadUser());
    // }else{
    //   dispatch(setAlert(res.data.error, 'danger'))
    //   dispatch({
    //     type: LOGIN_FAIL
    //   });
    // }
};
