import { NavigationLink } from "../Navigation/Navigation.styled";
import { ErrorBlock } from "./ErrorNotFound.styled";

const ErrorNotFound = ({ error }) => {
  return (
    <ErrorBlock>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <NavigationLink href={"/"}>Go to the Shops page</NavigationLink>
    </ErrorBlock>
  );
};

export default ErrorNotFound;
