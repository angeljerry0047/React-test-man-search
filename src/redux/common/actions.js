import { SET_TOKEN_DATA } from '../actions';

export const setTokenData = (data) => {
  return {
    type: SET_TOKEN_DATA,
    payload: data,
  };
};