import { Position } from "@deck.gl/core";
import { ArcLayer } from "@deck.gl/layers";

import { TImage } from "../GlobeImage/images";

export default function getArcLayer(
  images: TImage[],
  pos: [lon: number, lat: number]
) {
  if (pos[0] === 0 && pos[1] === 0) {
    return null;
  }
  const enrichedImages = images.map((i) => ({ ...i, arcSourcePos: pos }));
  return new ArcLayer({
    id: "arc",
    data: enrichedImages,
    getWidth: 1,
    getSourcePosition: (d) => (d as TImage).arcSourcePos as Position,
    getTargetPosition: (d) => (d as TImage).pos as Position,
    getSourceColor: () => [69, 170, 242],
    getTargetColor: () => [255, 255, 255],
  });
}
