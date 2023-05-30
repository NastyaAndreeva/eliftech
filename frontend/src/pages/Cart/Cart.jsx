import { useLoadScript } from "@react-google-maps/api";
import ContactForm from "../../components/ContactForm";
import Map from "../../components/GoogleMap/GoogleMap";
import { Container } from "../../components/shared/Container.styled";

const Cart = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY,
  });
  console.log("isLoaded: ", isLoaded);
  return (
    <Container>
      <ContactForm />
      {isLoaded ? <Map /> : <div>Loading...</div>}
    </Container>
  );
};

export default Cart;
