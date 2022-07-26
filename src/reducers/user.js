// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SEND_LOGIN } from '../actions/index';

const INITIAL_STATE = {
  email: '',
  name: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SEND_LOGIN:
    return { ...state, name: action.store };
  default:
    return state;
  }
}

export default user;
