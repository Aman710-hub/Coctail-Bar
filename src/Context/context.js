import React, { createContext, useContext, useState } from "react";

// created context
const AppContext = createContext();

// base url
const url = "www.thecocktaildb.com/api/json/v1/1/search.php?s=";

// provider component
const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // fuction for data fetching
  const fetchData = async () => {
    setLoading(true);
    try {
      const resp = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a"
      );
      const data = await resp.json();
      setData(data.drinks);
      setLoading(false);
      console.log("data fetching");
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  };
  return (
    <AppContext.Provider value={{ fetchData, data, loading }}>
      {children}
    </AppContext.Provider>
  );
};

// costum hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
