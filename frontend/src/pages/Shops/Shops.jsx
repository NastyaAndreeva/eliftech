import { getProducts } from "../../api";
import ProductList from "../../components/ProductList";
import ShopList from "../../components/ShopList";
import { useEffect, useState } from "react";
import { Container } from "../../components/shared/Container.styled";

const Shops = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts(setProducts);
    localStorage.setItem("orders", JSON.stringify([]));
  }, []);

  return (
    <Container>
      <div style={{ display: "flex" }}>
        <ShopList />
        <ProductList products={products} />
      </div>
    </Container>
  );
};

export default Shops;
