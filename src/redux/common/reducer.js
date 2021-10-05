import { SET_TOKEN_DATA } from '../actions';

const INIT_STATE = {
  tokenData: [],
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_TOKEN_DATA:
      return { ...state, tokenData: action.payload };
    default:
      return { ...state };
  }
};
