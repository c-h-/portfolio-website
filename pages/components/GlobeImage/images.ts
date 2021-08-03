import image from "next/image";

import bahamas from "../../../public/img/bahamas.jpg";
import bryce from "../../../public/img/bryce.jpg";
import cayman from "../../../public/img/cayman.jpg";
import fujian from "../../../public/img/fujian.jpg";
import hongkong from "../../../public/img/hongkong.jpg";
import london from "../../../public/img/london.jpg";
import md from "../../../public/img/md.jpg";
import md2 from "../../../public/img/md2.jpg";
import montreal from "../../../public/img/montreal.jpg";
import seattle from "../../../public/img/seattle.jpg";
import sf from "../../../public/img/sf.jpg";
import shenzhen from "../../../public/img/shenzhen.jpg";
import GlobeImage from ".";

export type TImage = {
  imgs: {
    src: StaticImageData;
    alt: string;
  }[];
  url: string;
  pos: [lon: number, lat: number];
};

const images: TImage[] = [
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
    imgs: [{ src: london, alt: "London, England" }],
    url: "https://www.instagram.com/p/Bew8iU7Aj7F/",
    pos: [-0.134295, 51.498043],
  },
  {
    imgs: [{ src: md, alt: "Maryland" }],
    url: "https://www.instagram.com/p/BjSFfCxn6jB/",
    pos: [-76.469668, 38.332734],
  },
];

export default images;
