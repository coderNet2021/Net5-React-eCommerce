import { Container, CssBaseline, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Catalog from "../../features/catalog/catalog";
import Header from "../layout/Header";
import { Product } from "../models/Product";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  function addProduct() {
    setProducts((prevState) => [
      ...prevState,
      {
        id: prevState.length + 101,
        name: "product" + (prevState.length + 1),
        price: prevState.length * 100 + 100,
        description: "description 1",
        pictureUrl: "http://local",
        brand: "brand1",
      },
    ]);
  }

  return (
    <>
    <CssBaseline />
      <Header />
      <Container>
      <Catalog products={products} addProduct={addProduct} />
      </Container>
    </>
  );
}

export default App;
