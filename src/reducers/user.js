// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SEND_LOGIN } from '../actions';

const INICIAL_STATE = {
  user: {
    email: '',
  },
};

const user = (state = INICIAL_STATE, action) => {
  switch (action.type) {
  case SEND_LOGIN:
    return { ...state, ...action.state };
  default:
    return state;
  }
};

export default user;
