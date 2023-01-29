import React, { createContext, useContext, useState } from "react";

// created context
const AppContext = createContext();

// base url
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=v";

// provider component
const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [SingleCoctail, setSingleCoctail] = useState([]);

  // fuction for data fetching all coctails
  const fetchData = async () => {
    setLoading(true);
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setData(data.drinks);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  };

  const fetchSingleCoctail = async (id) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await response.json();
      setSingleCoctail(data.drinks);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };
  return (
    <AppContext.Provider
      value={{ fetchData, data, loading, SingleCoctail, fetchSingleCoctail }}
    >
      {children}
    </AppContext.Provider>
  );
};

// costum hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
