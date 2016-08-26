import Store from 'Store';

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

class Actions {

  increment(amount = 1) {
    Store.dispatch({type: INCREMENT_COUNTER, amount});
  }

  decrement(amount = 1) {
    Store.dispatch({type: DECREMENT_COUNTER, amount});
  }

}

export default new Actions();
