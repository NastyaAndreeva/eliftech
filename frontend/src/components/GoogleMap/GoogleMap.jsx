import { useMemo } from "react";
import { GoogleMap, MarkerF } from "@react-google-maps/api";

const Map = () => {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);
  return (
    <GoogleMap
      zoom={10}
      center={center}
      mapContainerStyle={{ width: "500px", height: "500px" }}
    >
      <MarkerF position={center} />
    </GoogleMap>
  );
};

export default Map;
