import Store from 'Store';

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

class Actions {

  increment() {
    Store.dispatch({type: INCREMENT_COUNTER});
  }

  decrement() {
    Store.dispatch({type: DECREMENT_COUNTER});
  }

}

export default new Actions();
