import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import { Container } from "../components/shared/Container.styled";
import { NavigationStyled } from "../components/shared/Navigation.styled";

export default function Root() {
  return (
    <Container>
      <NavigationStyled>
        <Navigation />
      </NavigationStyled>
      <div id="detail">
        <Outlet />
      </div>
    </Container>
  );
}
