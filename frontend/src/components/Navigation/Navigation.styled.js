import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavigationList = styled.ul`
  list-style: none;
  display: flex;
`;

export const NavigationLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  margin-right: 15px;

  &.active {
    color: white;
    background-color: orangered;
  }
`;
