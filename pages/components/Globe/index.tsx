import { useState } from "react";
import styled from "styled-components";
import DeckGL from "deck.gl";
import { FlyToInterpolator, _GlobeView as GlobeView } from "@deck.gl/core";
import globeLayers from "./globeLayers";

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
const GlobeWrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
`;

export default function Globe() {
  const [viewState, setViewState] = useState(INITIAL_VIEW_STATE);

  const transitionIn = () =>
    setViewState({
      ...viewState,
      zoom: 0.8,
      latitude: 37.77493,
      longitude: -122.41942,
      transitionDuration: 3000,
      transitionInterpolator: new FlyToInterpolator({ curve: 1 }),
    });

  return (
    <GlobeWrapper>
      <DeckGL
        initialViewState={viewState}
        views={new GlobeView({ id: "globe", controller: true, resolution: 10 })}
        layers={globeLayers()}
        onLoad={transitionIn}
      />
    </GlobeWrapper>
  );
}
