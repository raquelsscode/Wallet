export const SEND_LOGIN = 'SEND_LOGIN';
export const sendAction = (store) => ({ type: SEND_LOGIN, store });

export const GET_CURRENCIE = 'GET_CURRENCIE';
export const sendexchange = (arrayObj) => ({ type: GET_CURRENCIE, arrayObj });

export const GET_EXPENSES = 'GET_EXPENSES';
export const sendExpenses = (expenses) => ({ type: GET_EXPENSES, expenses });

export const xchange = () => async (dispatch) => {
  const EXCHANGE = 'https://economia.awesomeapi.com.br/json/all';
  const response = await fetch(EXCHANGE);
  const arrayPromisse = await response.json();
  const data = Object.keys(arrayPromisse);
  const filterArrays = data.filter((item) => item !== 'USDT');
  dispatch(sendexchange(filterArrays));
};
