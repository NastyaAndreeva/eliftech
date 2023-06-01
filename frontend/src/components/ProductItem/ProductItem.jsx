import {
  ProductDetail,
  ProductItemStyled,
  StyledButton,
} from "./ProductItem.styled";

const ProductItem = ({ product }) => {
  const onClick = () => {
    const orderList = JSON.parse(localStorage.getItem("orders")) || [];
    const order = {
      name: product.name,
      quantity: 1,
      image: product.image,
      price: product.price,
    };
    const isAlreadyInArray = orderList.find((el) => el.name === product.name);
    localStorage.setItem(
      "orders",
      JSON.stringify(
        isAlreadyInArray
          ? orderList.map((el) =>
              el.name === product.name
                ? { ...el, quantity: el.quantity + 1 }
                : el
            )
          : [...orderList, order]
      )
    );
  };
  const { image, name, price, description } = product;
  return (
    <ProductItemStyled>
      <img src={`${image}`} alt={`${name}`} width="150px" height="150px" />
      <ProductDetail>
        <b>Name: </b>
        {name}
      </ProductDetail>
      <ProductDetail>
        <b>Description: </b>
        {description}
      </ProductDetail>
      <ProductDetail>
        <b>Price: </b>
        {price} ₴
      </ProductDetail>
      <StyledButton onClick={onClick}>Add to cart</StyledButton>
    </ProductItemStyled>
  );
};

export default ProductItem;
