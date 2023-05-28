import ProductItem from "../ProductItem/ProductItem";
import { ProductListStyled } from "./ProductList.styled";

const ProductList = ({ products }) => {
  return (
    <ProductListStyled>
      {products.map((product) => (
        <ProductItem product={product} key={product.name} />
      ))}
    </ProductListStyled>
  );
};

export default ProductList;
