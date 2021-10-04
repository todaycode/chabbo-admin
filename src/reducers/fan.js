import { 
    GETFAN
} from '../actions/types';

const initialState = [];

function fanReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GETFAN:
      return payload;
    // case REMOVE_ALERT:
    //   return state.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
}

export default fanReducer;
