import React, { useState, useContext, useEffect } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [cocktailData, setcocktailData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('a');

  let fetchData = async () => {
    try {
      const res = await fetch(`${url}${searchTerm}`);
      const data = await res.json();
      if (data.drinks) {
        setcocktailData(data.drinks);
      } else {
        setcocktailData([]);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchTerm]);

  let updateSearchTerm = (formValue) => {
    // setLoading(true);
    setSearchTerm(formValue);
  };

  return (
    <AppContext.Provider value={{ cocktailData, loading, updateSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
