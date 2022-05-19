// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_CURRENCIE } from '../actions';

const INICIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const wallet = (state = INICIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCIE:
    return { ...state,
      currencies: action.currencies,
    };
  default: return state;
  }
};

export default wallet;
