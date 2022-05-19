// Coloque aqui suas actions
export const SEND_LOGIN = 'SEND_LOGIN';
export const sendAction = (state) => ({ type: SEND_LOGIN, state });

export const GET_CURRENCIE = 'GET_CURRENCIE';
export const sendexchange = (arrayObj) => ({ type: GET_CURRENCIE, currencies: arrayObj });

export const xchange = () => {
  console.log('redux');
  return async (dispatch) => {
    const EXCHANGE = 'https://economia.awesomeapi.com.br/json/all';
    const response = await fetch(EXCHANGE);
    const currencie = await response.json();
    const arrayPromisse = Object.keys(currencie);
    const filterArray = arrayPromisse.filter((elem) => (elem !== 'USDT'));
    dispatch(sendexchange(filterArray));
  };
};
