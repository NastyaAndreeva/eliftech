import { AddButton, ProductItemStyled } from "./ProductItem.styled";

const ProductItem = ({ product }) => {
  return (
    <ProductItemStyled>
      <img
        src={`${product.image}`}
        alt={`${product.name}`}
        width="100px"
        height="100px"
      />
      <p>{product.description}</p>
      <AddButton>Add to cart</AddButton>
    </ProductItemStyled>
  );
};

export default ProductItem;
