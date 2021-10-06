import { 
    GETREQUEST,
    UPDATEREQUEST 
} from '../actions/types';

const initialState = [];

function requestReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GETREQUEST:
      return payload;
    case UPDATEREQUEST:
      return payload;
    default:
      return state;
  }
}

export default requestReducer;
