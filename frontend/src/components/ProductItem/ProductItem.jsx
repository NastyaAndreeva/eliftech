import { useContext } from "react";
import { ProductItemStyled, StyledButton } from "./ProductItem.styled";
import { ProductsContext } from "../../productsContext";

const ProductItem = ({ product }) => {
  const orderList = useContext(ProductsContext);
  return (
    <ProductItemStyled>
      <img
        src={`${product.image}`}
        alt={`${product.name}`}
        width="100px"
        height="100px"
      />
      <p>{product.description}</p>
      <StyledButton
        onClick={() => orderList.push({ name: product.name, quantity: 1 })}
      >
        Add to cart
      </StyledButton>
    </ProductItemStyled>
  );
};

export default ProductItem;
