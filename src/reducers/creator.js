import { 
    GETCREATOR
} from '../actions/types';

const initialState = [];

function creatorReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GETCREATOR:
      return payload;
    // case REMOVE_ALERT:
    //   return state.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
}

export default creatorReducer;
