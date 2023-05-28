import ProductItem from "../ProductItem/ProductItem";
import { ProductListStyled } from "./ProductList.styled";

const mockProducts = [
  {
    name: "Philadelphia Light Roll",
    image:
      "https://ikura.ua/Media/images/catalog/big/b3ca48a54099a2abf874b565b6f12979.jpg",
    description: "Ingredients: salmon, cream cheese, cucumber",
  },
  {
    name: "Tokyo",
    image:
      "https://ikura.ua/Media/images/catalog/big/23d3e7e3de20dfc97bc068a4e6b56013.jpg",
    description:
      "Ingredients: mussel, squid, tomato, lettuce, masago, spice sauce",
  },
  {
    name: "Unagi Cheese Roll",
    image:
      "https://ikura.ua/Media/images/catalog/big/5744df3b48b7ccdb8c1b7e98a10bf338.jpg",
    description:
      "Ingredients: eel, cucumber, cream cheese, unagi sauce and sesame seeds",
  },
  {
    name: "Crunch roll with squid",
    image:
      "https://ikura.ua/Media/images/catalog/big/ab7fa2edac8fa090395061fa8cfd4adb.jpg",
    description:
      "Ingredients: squid, cream cheese, cucumber, Japanese omelet, green onion, mayonnaise, panko crackers",
  },
  {
    name: "Roll Montana",
    image:
      "https://ikura.ua/Media/images/catalog/big/18b887d05ad5ec773a6314cd9b052147.jpg",
    description: "Ingredients: squid, mussel, seaweed Chuka, tomato",
  },
];

const ProductList = () => {
  return (
    <ProductListStyled>
      {mockProducts.map((product) => (
        <ProductItem product={product} key={product.name} />
      ))}
    </ProductListStyled>
  );
};

export default ProductList;
