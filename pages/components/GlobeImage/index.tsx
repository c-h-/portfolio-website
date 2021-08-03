import Image from "next/image";
import styled from "styled-components";

import { TImage } from "./images";

interface IStyledContaner {
  show: boolean;
}

const StyledContainer = styled.div<IStyledContaner>`
  background-color: white;
  padding: 0.3rem;
  transition: transform ease-in-out 200ms;
  transform: scale(${(props) => (props.show ? 1 : 0)});
`;

type TGlobeImageProps = {
  imageSet: TImage;
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

export default function GlobeImage({ imageSet, viewState }: TGlobeImageProps) {
  const lat = viewState?.latitude || 0;
  const lon = viewState?.longitude || 0;

  // set the image dimension to max 160 and smaller when zoomed out
  const width = Math.min(160, (viewState?.zoom || 0) * 50);

  const latMinBound = (lat - 45) % 180;
  const latMaxBound = (lat + 45) % 180;
  const lonMinBound = (lon - 90) % 360;
  const lonMaxBound = (lon + 90) % 360;

  const imgLat = imageSet.pos[1];
  const imgLon = imageSet.pos[0];
  const latInViewport = imgLat > latMinBound && imgLat < latMaxBound;
  const lonInViewport = imgLon > lonMinBound && imgLon < lonMaxBound;

  // only show images when viewport is loaded and lat/lon in current view
  const showImage = (viewState && latInViewport && lonInViewport) as boolean;
  return (
    <StyledContainer show={showImage}>
      {imageSet.imgs.map((image) => (
        <Image
          key={image.alt}
          src={image.src}
          alt={image.alt}
          width={width}
          height={width}
        />
      ))}
    </StyledContainer>
  );
}
