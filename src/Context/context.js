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
  const [uniqueCategories, setUniqueCategories] = useState([]);
  const [filters, setFilters] = useState({ category: "", alcohol: "" });

  // fuction for data fetching
  const fetchData = async (term) => {
    term ? (term = term) : (term = "x");
    setLoading(true);
    try {
      const resp = await fetch(`${url}${term}`);
      const data = await resp.json();
      setData(data.drinks || []);
      setFilteredData(data.drinks || []);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  };

  // fetch single coctail
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

  const onFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters({ ...filters, [name]: value });

    // copy original data to filter
    let temp = [...data];
    if (value === "All" || filteredData.length < 1) {
      setFilteredData(data);
      return;
    }
    temp = temp.filter((item) => {
      if (name === "alcohol") return item.strAlcoholic === value;
      if (name === "category") return item.strCategory === value;
      return null;
    });

    setFilteredData(temp);
  };

  //function to get unique categories
  const getUniqueCategories = () => {
    const allCategories = data?.map((coctail) => {
      return coctail.strCategory;
    });
    const uniqueCategories = new Set(allCategories);
    return [...uniqueCategories];
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
        getUniqueCategories,
        setFilteredData,
        filters,
        setFilters,
        uniqueCategories,
        setUniqueCategories,
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
