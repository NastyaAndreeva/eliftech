import { useRouteError } from "react-router-dom";
import ErrorNotFound from "../../components/ErrorNotFound";

const NotFound = () => {
  const error = useRouteError();
  console.error(error);

  return <ErrorNotFound error={error} />;
};

export default NotFound;
