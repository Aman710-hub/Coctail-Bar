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
  const [filters, setFilters] = useState({ category: "All", alcohol: "All" });

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

  // undading filters state
  const onFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters({ ...filters, [name]: value });
  };

  // filter coctails
  const filterCoctails = () => {
    let temp = [...data];

    if (filters.category !== "All") {
      temp = temp.filter((item) => {
        return item.strCategory === filters.category;
      });
    }
    if (filters.alcohol !== "All") {
      temp = temp.filter((item) => {
        return item.strAlcoholic === filters.alcohol;
      });
    }
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

  // call filter function every time filters changes
  useEffect(() => {
    filterCoctails();
  }, [filters]);

  useEffect(() => {
    setUniqueCategories(getUniqueCategories());
  }, [term, filteredData, data]);

  useEffect(() => {
    setFilters({ category: "All", alcohol: "All" });
  }, [term]);
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
