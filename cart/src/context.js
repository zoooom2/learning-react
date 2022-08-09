import React, { useState, useContext, useReducer, useEffect } from 'react';
// import cartItems from './data';
import reducer from './reducer';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project';
const AppContext = React.createContext();

let initialState = { loading: true, cart: [], total: 0, amount: 0 };

const AppProvider = ({ children }) => {
  const [items, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    dispatch({ type: 'LOADING' });
    let resp = await fetch(url);
    let data = await resp.json();
    dispatch({ type: 'DISPLAY_ITEMS', payload: data });
  };

  console.log(items);

  const increaseStock = (id) => {
    dispatch({ type: 'INCREMENT', payload: id });
  };

  const reduceStock = (id) => {
    dispatch({ type: 'DECREMENT', payload: id });
  };

  const removeStock = (id) => {
    dispatch({ type: 'REMOVE', payload: id });
  };

  const clearStock = () => {
    dispatch({ type: 'CLEAR' });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <AppContext.Provider
      value={{
        items,
        removeStock,
        reduceStock,
        increaseStock,
        clearStock,
      }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
