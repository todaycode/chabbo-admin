import { 
    GETREQUEST 
} from '../actions/types';

const initialState = [];

function requestReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GETREQUEST:
      return payload;
    // case REMOVE_ALERT:
    //   return state.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
}

export default requestReducer;
