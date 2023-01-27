import React, { createContext, useContext } from "react";

// created context
const AppContext = createContext();

// base url
const url = "www.thecocktaildb.com/api/json/v1/1/search.php?s=";

// provider component
const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value="oiuoo111111111i">
      {children}
    </AppContext.Provider>
  );
};

// costum hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
