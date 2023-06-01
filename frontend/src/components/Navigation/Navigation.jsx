import { NavigationList, NavigationLink } from "./Navigation.styled";

const Navigation = () => {
  return (
    <NavigationList>
      <li>
        <NavigationLink to={"/"}>Shops</NavigationLink>
      </li>
      <li>
        <NavigationLink to={"/cart"}>Shopping Cart</NavigationLink>
      </li>
      <li>
        <NavigationLink to={"/history"}>History</NavigationLink>
      </li>
    </NavigationList>
  );
};

export default Navigation;
