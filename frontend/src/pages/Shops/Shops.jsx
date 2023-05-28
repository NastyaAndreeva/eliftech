import ProductList from "../../components/ProductList";
import ShopList from "../../components/ShopList";

const Shops = () => {
  return (
    <div style={{ display: "flex" }}>
      <ShopList />
      <ProductList />
    </div>
  );
};

export default Shops;
