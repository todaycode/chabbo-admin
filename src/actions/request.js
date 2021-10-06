import api from '../utils/api';
import {
  UPDATEREQUEST
} from './types';
import  {store}  from '../store.js';

// update req User
export const updateReq = (userId, status, category) => async dispatch => {
  return new Promise(async function(resolve, reject) {
    const body = { userId, status, category};
    let reqs = store.getState().request;
    const res = await api.post('/updateReq', body);
    if(res.data.status == 1){
      const newReqs = reqs.map(item => {
        if(item.requester._id == userId) {
          item.status = status;
        }
        return item;
      })
      dispatch({
        type: UPDATEREQUEST,
        payload: newReqs
      });
      resolve(true);
    }else{
      resolve(false);
    }
  })
};
