import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

export default function Root() {
  return (
    <>
      <nav>
        <Navigation />
      </nav>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
