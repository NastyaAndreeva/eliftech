import {
  ShopListContainer,
  ShopListElement,
  ShopListTitle,
  StyledShopList,
} from "./ShopList.styled";

const mockShops = ["Sagittari", "Nivara", "Yeni", "Isis", "Celestea"];

const ShopList = () => {
  const onShopClick = () => {
    console.log("click: ");
  };
  return (
    <ShopListContainer>
      <ShopListTitle>Shops</ShopListTitle>
      <StyledShopList>
        {mockShops.map((el) => (
          <ShopListElement onClick={onShopClick} key={el} isSelected={false}>
            {el}
          </ShopListElement>
        ))}
      </StyledShopList>
    </ShopListContainer>
  );
};

export default ShopList;
