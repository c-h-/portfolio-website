import { GeoJsonLayer } from "@deck.gl/layers";
import { SimpleMeshLayer } from "@deck.gl/mesh-layers";
import { SphereGeometry } from "@luma.gl/engine";
import { COORDINATE_SYSTEM } from "deck.gl";

const EARTH_RADIUS_METERS = 6.3e6;

export default function getGlobeLayers() {
  return [
    new SimpleMeshLayer({
      id: "earth-sphere",
      data: [0],
      mesh: new SphereGeometry({
        radius: EARTH_RADIUS_METERS,
        nlat: 18,
        nlong: 36,
      }),
      coordinateSystem: COORDINATE_SYSTEM.CARTESIAN,
      getPosition: [0, 0, 0],
      getColor: [69, 170, 242],
      extruded: true,
      material: {
        ambient: 0.3,
        diffuse: 0.7,
        shininess: 80,
        specularColor: [30, 30, 30],
      },
    }),
    new GeoJsonLayer({
      id: "earth-land",
      data: "https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_land.geojson",
      stroked: false,
      filled: true,
      opacity: 0.9,
      getFillColor: [164, 176, 190],
      extruded: true,
      material: {
        ambient: 0.6,
        diffuse: 0.1,
        shininess: 80,
        specularColor: [30, 30, 30],
      },
    }),
  ];
}
