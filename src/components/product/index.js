import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material/";
import { getProducts } from "../../Hooks/useGetProducts";
import { getCategory } from "../../Hooks/useGetCategory";
import CardProduct from "../cardProduct/index";
import Category from "../category/index";
import "../../App.css";
export function Products() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [isLoading, setLoading] = useState(true);

  async function loadProduct() {
    const response = await getProducts();
    console.log(response);
    if (response && response.status === 200) {
      setProducts(response.data);
      setLoading(false);
    } else {
      setLoading(true);
    }
  }
  async function loadCategory() {
    const response = await getCategory();
    if (response && response.status === 200) {
      setCategory(response.data);
    }
  }
  useEffect(() => {
    loadProduct();
    loadCategory();
  }, []);
  console.log(isLoading);
  return (
    <div className="container">
      {isLoading ? (
        <CircularProgress sx={{ display: "flex", marginTop: 3 }} />
      ) : (
        <>
          <Category category={category} />
          <CardProduct products={products} />
        </>
      )}
    </div>
  );
}
