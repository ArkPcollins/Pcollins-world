import { MapContainer, TileLayer, Marker } from "react-leaflet";

interface Props {
  lat: number;
  lng: number;
}

export function PropertyMap({ lat, lng }: Props) {
  return (
    <MapContainer
      // 🟢 FIX: Adding a unique key forces the map to re-center when coordinates change
      key={`${lat}-${lng}`} 
      center={[lat, lng]}
      zoom={15}
      style={{
        height: "400px",
        width: "100%", // Good practice to explicitly set width
      }}
    >
      <TileLayer
        url="https://openstreetmap.org{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]} />
    </MapContainer>
  );
}
