import abudhabi from "../../../public/img/abudhabi.jpg";
import bahamas from "../../../public/img/bahamas.jpg";
import bryce from "../../../public/img/bryce.jpg";
import cayman from "../../../public/img/cayman.jpg";
import fujian from "../../../public/img/fujian.jpg";
import hongkong from "../../../public/img/hongkong.jpg";
import iceland from "../../../public/img/iceland.jpg";
import london from "../../../public/img/london.jpg";
import md from "../../../public/img/md.jpg";
import miami from "../../../public/img/miami.jpg";
import mombasa from "../../../public/img/mombasa.jpg";
import montreal from "../../../public/img/montreal.jpg";
import neworleans from "../../../public/img/neworleans.jpg";
import nyc from "../../../public/img/nyc.jpg";
import qatar from "../../../public/img/qatar.jpg";
import seattle from "../../../public/img/seattle.jpg";
import sf from "../../../public/img/sf.jpg";
import shanghai from "../../../public/img/shanghai.jpg";
import shenzhen from "../../../public/img/shenzhen.jpg";
import singapore from "../../../public/img/singapore.jpg";
import xian from "../../../public/img/xian.jpg";

export type TImage = {
  imgs: {
    src: StaticImageData;
    alt: string;
  }[];
  url: string;
  pos: [lon: number, lat: number];
  position?: "left" | "right";
  arcSourcePos?: [lon: number, lat: number];
};

const images: TImage[] = [
  {
    imgs: [{ src: nyc, alt: "New York City, NY" }],
    url: "https://www.instagram.com/p/9MVicpQnTh/",
    pos: [-73.981269, 40.759644],
  },
  {
    imgs: [{ src: mombasa, alt: "Mombasa, Kenya" }],
    url: "https://www.instagram.com/p/pl7oHAQnbU/",
    pos: [39.680226, -4.062233],
  },
  {
    imgs: [{ src: xian, alt: "Xian, China" }],
    url: "https://www.instagram.com/p/fJUN3RwnSl/",
    pos: [108.93493, 34.274622],
    position: "left",
  },
  {
    imgs: [{ src: shanghai, alt: "Shanghai, China" }],
    url: "https://www.instagram.com/p/hIKmOlQnSH/",
    pos: [121.496731, 31.236239],
  },
  {
    imgs: [{ src: neworleans, alt: "New Orleans, LA" }],
    url: "https://www.instagram.com/p/sNzPNAwncp/",
    pos: [-90.06197, 29.956787],
  },
  {
    imgs: [{ src: iceland, alt: "Isafjordur, Iceland" }],
    url: "https://www.instagram.com/p/BVVvsFqAb0P/",
    pos: [-23.127337, 66.075164],
  },
  {
    imgs: [{ src: abudhabi, alt: "Abu Dhabi, UAE" }],
    url: "https://www.instagram.com/p/UI3z-iwnZZ/",
    pos: [54.36086, 24.494286],
  },
  {
    imgs: [{ src: qatar, alt: "Qatar Desert" }],
    url: "https://www.instagram.com/p/kc1b0xQnWf/",
    pos: [50.879812, 24.9552],
    position: "left",
  },
  {
    imgs: [{ src: miami, alt: "Miami Beach, FL" }],
    url: "https://www.instagram.com/p/BMToDr4BWO6/",
    pos: [-80.12938, 25.788586],
    position: "left",
  },
  {
    imgs: [{ src: bahamas, alt: "The Bahamas" }],
    url: "https://www.instagram.com/p/BiPVOj7H5Po/",
    pos: [-77.346326, 25.030911],
  },
  {
    imgs: [{ src: bryce, alt: "Bryce Canyon, UT" }],
    url: "https://www.instagram.com/p/Bf1HuNDABTE/",
    pos: [-112.208434, 37.597756],
  },
  {
    imgs: [{ src: cayman, alt: "Cayman Islands" }],
    url: "https://www.instagram.com/p/BcGryBqA67g/",
    pos: [-81.382982, 19.319525],
  },
  {
    imgs: [{ src: fujian, alt: "Fujian, China" }],
    url: "https://www.instagram.com/p/BgkDIOKhA7M/",
    pos: [118.128403, 24.543688],
  },
  {
    imgs: [{ src: hongkong, alt: "Hong Kong, China" }],
    url: "https://www.instagram.com/p/BjBclfOn10y/",
    pos: [113.928963, 22.296065],
  },
  {
    imgs: [{ src: shenzhen, alt: "Shenzhen, China" }],
    position: "left",
    url: "https://www.instagram.com/p/Bab1X6ngc2e/",
    pos: [114.056516, 22.529085],
  },
  {
    imgs: [{ src: london, alt: "London, England" }],
    url: "https://www.instagram.com/p/Bew8iU7Aj7F/",
    pos: [-0.134295, 51.498043],
  },
  {
    imgs: [{ src: md, alt: "Maryland" }],
    url: "https://www.instagram.com/p/BjSFfCxn6jB/",
    pos: [-76.469668, 38.332734],
    position: "left",
  },
  {
    imgs: [{ src: montreal, alt: "Montreal, Canada" }],
    url: "https://www.instagram.com/p/Bd5vLoGgVmz/",
    pos: [-73.561732, 45.496688],
    position: "left",
  },
  {
    imgs: [{ src: seattle, alt: "Seattle, WA" }],
    url: "https://www.instagram.com/p/CQ_Z4zbMYJ_/",
    pos: [-122.349619, 47.614627],
    position: "left",
  },
  {
    imgs: [{ src: sf, alt: "San Francisco, CA" }],
    url: "https://www.instagram.com/p/BiMRz5tnZIr/",
    pos: [-122.410478, 37.794601],
  },
  {
    imgs: [{ src: singapore, alt: "Singapore" }],
    url: "https://www.instagram.com/p/Bew9aVlgg4I/",
    pos: [103.866908, 1.278989],
  },
];

export default images;
