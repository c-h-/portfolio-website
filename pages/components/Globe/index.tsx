import { FlyToInterpolator, _GlobeView as GlobeView } from "@deck.gl/core";
import { HtmlOverlay, HtmlOverlayItem } from "@nebula.gl/overlays";
import DeckGL from "deck.gl";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

import { resolveLocation } from "../../state/actions";
import { useAppDispatch } from "../../state/store";
import GlobeImage from "../GlobeImage";
import images from "../GlobeImage/images";
import getArcLayer from "./getArcLayer";
import globeLayers from "./getGlobeLayers";
import getLights from "./getLights";

const INITIAL_VIEW_STATE = {
  altitude: 1.5,
  latitude: 25.77427,
  longitude: -80.19366,
  bearing: 0,
  pitch: 0,
  zoom: 0,
  transitionDuration: 1500,
  transitionInterpolator: new FlyToInterpolator(),
};

interface IGlobeWrapper {
  loaded: boolean;
}
const GlobeWrapper = styled.div<IGlobeWrapper>`
  position: absolute;
  width: 100vw;
  height: 100vh;
  opacity: ${(props) => (props.loaded ? "1" : "0")};
  transition: opacity 2s ease-in-out;
`;

export default function Globe() {
  const [viewState, setViewState] = useState(INITIAL_VIEW_STATE);
  const [lighting, setLighting] = useState(getLights());
  const [isLoaded, setLoaded] = useState(false);
  const [liveViewState, setLiveViewState] = useState(null);
  const dispatch = useAppDispatch();

  const onViewStateChange = useCallback((newState) => {
    setLiveViewState(newState.viewState);
  }, []);

  const transitionIn = () =>
    setViewState({
      ...viewState,
      zoom: 0.8,
      latitude: 37.77493,
      longitude: -122.41942,
      transitionDuration: 3000,
      transitionInterpolator: new FlyToInterpolator({ curve: 1 }),
    });

  // keep the sun's light updated
  useEffect(() => {
    const handle = setInterval(() => setLighting(getLights()), 1000 * 30);
    return () => clearInterval(handle);
  }, []);

  // transition in GlobeWrapper
  useEffect(() => {
    dispatch(resolveLocation());
    setLoaded(true);
  }, []);

  const layers = [...globeLayers(), getArcLayer(images)];

  return (
    <GlobeWrapper loaded={isLoaded}>
      <DeckGL
        initialViewState={viewState}
        views={new GlobeView({ id: "globe", controller: true, resolution: 12 })}
        layers={layers}
        effects={[lighting]}
        onLoad={transitionIn}
        onViewStateChange={onViewStateChange}
      >
        <HtmlOverlay>
          {images.map((imageSet) => (
            <HtmlOverlayItem coordinates={imageSet.pos} key={imageSet.url}>
              <GlobeImage imageSet={imageSet} viewState={liveViewState} />
            </HtmlOverlayItem>
          ))}
        </HtmlOverlay>
      </DeckGL>
    </GlobeWrapper>
  );
}
