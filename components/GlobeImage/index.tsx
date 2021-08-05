import Image from "next/image";
import styled from "styled-components";

import loader from "../../utils/img-loader";
import { TImage } from "./images";

interface IStyledContaner {
  show: boolean;
  zoom: number;
  position?: "left" | "right";
}

const StyledContainer = styled.a<IStyledContaner>`
  display: block;
  position: relative;
  z-index: 10000;
  background-color: white;
  padding: 0.3rem;
  padding-bottom: 1rem;
  transition: transform ease-in-out 50ms;
  transform-origin: top left;
  transform: scale(${(props) => (props.show ? props.zoom : 0)})
    translate(${(props) => (props.position === "left" ? "-100%" : "0")}, 0);

  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12);
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

  const latMinBound = (lat - 45) % 180;
  const latMaxBound = (lat + 45) % 180;
  const lonMinBound = (lon - 90) % 360;
  const lonMaxBound = (lon + 90) % 360;

  const imgLat = imageSet.pos[1];
  const imgLon = imageSet.pos[0];
  const latInViewport = imgLat > latMinBound && imgLat < latMaxBound;
  const lonInViewport = imgLon > lonMinBound && imgLon < lonMaxBound;

  const zoom = Math.min(1, (viewState?.zoom || 0) / 5);

  // only show images when viewport is loaded and lat/lon in current view
  const showImage = (viewState && latInViewport && lonInViewport) as boolean;
  return (
    <StyledContainer
      show={showImage}
      zoom={zoom}
      href={imageSet.url}
      position={imageSet.position}
      target="_blank"
      rel="noreferrer"
    >
      {imageSet.imgs.map((image) => (
        <Image
          key={image.alt}
          src={image.src}
          alt={image.alt}
          objectFit="cover"
          width={200}
          height={200}
          loader={loader}
          unoptimized
        />
      ))}
    </StyledContainer>
  );
}
