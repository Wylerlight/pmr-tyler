import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import './Map.css';

function Map() {
  const center = {
    lat: 34.06827,
    lng: -117.21441,
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_APP_PUBLIC_MAP_API,
  });
  return (
    <>
      {isLoaded ? (
        <GoogleMap mapContainerClassName="map" center={center} zoom={12}>
          <Marker position={center} />
        </GoogleMap>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}

export default Map;
