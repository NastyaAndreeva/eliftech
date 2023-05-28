import { getProducts } from "../../api/getProducts";
import ProductList from "../../components/ProductList";
import ShopList from "../../components/ShopList";
import { useEffect, useState } from "react";

const Shops = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts(setProducts);
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <ShopList />
      <ProductList products={products} />
    </div>
  );
};

export default Shops;
