import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material/";
import { getProducts } from "../../Hooks/useGetProducts";
import { CardProduct, Category } from "../index";
import "../../App.css";
export default function Index() {
  const [products, setProducts] = useState([]);
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
  useEffect(() => {
    loadProduct();
  }, []);
  console.log(isLoading);
  return (
    <div className="container">
      <div>
        {isLoading ? (
          <CircularProgress sx={{ display: "flex", marginTop: 3 }} />
        ) : (
          <>
            <Category />
            <CardProduct products={products} />
          </>
        )}
      </div>
    </div>
  );
}
