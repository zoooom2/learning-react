import { useEffect } from 'react';

export default function reducer(state, action) {
  if (action.type === 'INCREMENT') {
    let newArr = [];
    state.cart.map((x) => {
      return x.id === action.payload
        ? newArr.push({ ...x, amount: x.amount + 1 })
        : newArr.push(x);
    });
    return { ...state, cart: newArr };
  }

  if (action.type === 'DECREMENT') {
    let newArr = [];
    state.cart.map((x) => {
      return x.id === action.payload
        ? newArr.push({ ...x, amount: x.amount - 1 })
        : newArr.push(x);
    });

    return { ...state, cart: newArr.filter((x) => x.amount !== 0) };
  }

  if (action.type === 'REMOVE') {
    let newArr = state.filter((x) => x.id !== action.payload);
    return { ...state, cart: newArr };
  }

  if (action.type === 'LOADING') {
    return { ...state, loading: false };
  }

  if (action.type === 'DISPLAY_ITEMS') {
    return { ...state, cart: action.payload };
  }

  if (action.type === 'CLEAR') return [];

  throw new Error();
}
