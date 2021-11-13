import { useState, useEffect } from "react";
import agent from "../../app/api/agent";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { Product } from "../../app/models/Product";
import ProductList from "./ProductList";

// interface Props {
//   products: Product[];
//   addProduct: () => void;
// }

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    agent.Catalog.list()
      .then((products) => setProducts(products))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <LoadingComponent message="loading products ..." />;

  // function addProduct() {
  //   setProducts((prevState) => [
  //     ...prevState,
  //     {
  //       id: prevState.length + 101,
  //       name: "product" + (prevState.length + 1),
  //       price: prevState.length * 100 + 100,
  //       description: "description 1",
  //       pictureUrl: "http://local",
  //       brand: "brand1",
  //     },
  //   ]);
  // }

  return (
    <>
      <ProductList products={products} />
    </>
  );
}
