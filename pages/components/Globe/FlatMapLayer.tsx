import ReactMapGl from "react-map-gl";
import BuildingsLayer from "./BuildingsLayer";

const MAPBOX_API_TOKEN =
  "pk.eyJ1IjoiY2h1bGNoZXIiLCJhIjoiY2tyYm5lZWg5MjVrMDMwcjI2NjNudngybiJ9.V7z6wkNgXZUIopPs5mpXZA";

export default function FlatMapLayer() {
  return (
    <ReactMapGl mapboxApiAccessToken={MAPBOX_API_TOKEN}>
      <BuildingsLayer />
    </ReactMapGl>
  );
}
