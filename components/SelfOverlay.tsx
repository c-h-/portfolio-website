import { Tag } from "@blueprintjs/core";

type TGlobeImageProps = {
  pos: [lon: number, lat: number];
  viewState: null | {
    altitude: number;
    bearing: number;
    height: number;
    latitude: number;
    longitude: number;
    maxPitch: number;
    maxZoom: number;
    minPitch: number;
    minZoom: number;
    pitch: number;
    width: number;
    zoom: number;
  };
};

const SelfOverlay = ({ pos, viewState }: TGlobeImageProps) => {
  const [userLon, userLat] = pos;
  const lat = viewState?.latitude || 0;
  const lon = viewState?.longitude || 0;

  const latMinBound = (lat - 45) % 180;
  const latMaxBound = (lat + 45) % 180;
  const lonMinBound = (lon - 90) % 360;
  const lonMaxBound = (lon + 90) % 360;

  const latInViewport = userLat > latMinBound && userLat < latMaxBound;
  const lonInViewport = userLon > lonMinBound && userLon < lonMaxBound;

  const showTag = (viewState && latInViewport && lonInViewport) as boolean;
  return showTag ? (
    <Tag round icon="user" minimal intent="success">
      Your estimated location
    </Tag>
  ) : null;
};
export default SelfOverlay;
