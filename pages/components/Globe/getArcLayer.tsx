import { Position } from "@deck.gl/core";
import { ArcLayer } from "@deck.gl/layers";
import { useSelector } from "react-redux";

import { selectPos } from "../../state/selectors";
import { TImage } from "../GlobeImage/images";

export default function getArcLayer(images: TImage[]) {
  const pos = useSelector(selectPos);
  return new ArcLayer({
    id: "arc",
    data: images,
    getWidth: 1,
    getSourcePosition: () => pos as Position,
    getTargetPosition: (d) => (d as TImage).pos as Position,
    getSourceColor: () => [69, 170, 242],
    getTargetColor: () => [255, 255, 255],
  });
}
