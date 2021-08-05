import {
  AmbientLight,
  LightingEffect,
  _SunLight as SunLight,
} from "@deck.gl/core";

export default function getLights() {
  return new LightingEffect({
    sunlight: new SunLight({
      color: [255, 255, 255],
      intensity: 0.5,
      timestamp: Date.now(),
    }),
    ambient: new AmbientLight({
      color: [255, 255, 255],
      intensity: 2.0,
    }),
  });
}
