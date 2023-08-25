import { createContext, useEffect, useState } from "react";
import { fetchDataFromApi } from "./api";

export const ContextApp = createContext();

export const AppContext = ({ children }) => {
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  const fetchCategories = async () => {
    setLoading(false);
    const { data } = await fetchDataFromApi("/api/categories?populate=*");
    setCategory(data);
    setLoading(true);
  };

  const fetchProducts = async () => {
    setLoading(false);
    const { data } = await fetchDataFromApi("/api/products?populate=*");
    setProduct(data);
    setLoading(true);
  };

  return (
    <ContextApp.Provider value={{ category, loading, product, setLoading }}>
      {children}
    </ContextApp.Provider>
  );
};
