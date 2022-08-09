import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

let AppProvider = ({ children }) => {
  const [isModalOpen, setModal] = useState(false);
  const [isSideBarOpen, setSideBar] = useState(false);

  const handleModal = () => {
    setModal((x) => !x);
  };

  const handleSideBar = () => {
    setSideBar((x) => !x);
  };
  return (
    <AppContext.Provider
      value={{ isModalOpen, handleModal, isSideBarOpen, handleSideBar }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);

export { AppProvider };
