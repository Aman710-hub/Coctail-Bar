import React, { createContext, useContext, useEffect, useState } from "react";

// created context
const AppContext = createContext();

// base url
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

// provider component
const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(data);
  const [loading, setLoading] = useState(true);
  const [SingleCoctail, setSingleCoctail] = useState([]);
  const [term, setTerm] = useState("");

  // fuction for data fetching all coctails
  const fetchData = async (term1) => {
    term1 ? (term1 = term1) : (term1 = "v");
    setLoading(true);
    try {
      const resp = await fetch(`${url}${term1}`);
      const data = await resp.json();
      setData(data.drinks);
      setFilteredData(data.drinks);
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

  // filter function
  const onFilterChange = (filterValue) => {
    if (filterValue === "All") {
      setFilteredData(data);
      return;
    }
    const filterData = data.filter((item) => {
      return item.strAlcoholic === filterValue
        ? item.strAlcoholic === filterValue
        : item.strAlcoholic === filterValue;
    });
    setFilteredData(filterData);
  };

  return (
    <AppContext.Provider
      value={{
        fetchData,
        data,
        filteredData,
        loading,
        SingleCoctail,
        fetchSingleCoctail,
        term,
        setTerm,
        onFilterChange,
      }}
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
