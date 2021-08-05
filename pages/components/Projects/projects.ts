import amation from "../../../public/img/projects/amation_1.png";
import est from "../../../public/img/projects/est.png";

export type TProject = {
  title: string;
  year: number;
  description: string;
  tags?: string[];
  feature: {
    type: "video" | "image";
    imgSrc?: StaticImageData;
    videoSrc?: string;
    alt?: string;
  };
};

const projects: TProject[] = [
  {
    title: "Tred - Virtual Reality Treadmill",
    tags: ["Arduino", "Python"],
    year: 2014,
    description:
      'We won the "largest hackathon in history" - the Grand Prize at LA Hacks. Built in 36 hours with team of three. Our treadmill captures user movement and translates it into motion in any virtual reality world. Designed to be low-cost, widely compatible, and high-performance.',
    feature: {
      type: "video",
      videoSrc: "./video/tred.mp4",
    },
  },
  {
    title: "Autonomous Hovercraft",
    year: 2012,
    description:
      "We won the college-wide Clark School of Engineering freshman competition. I led a team of ten to design and build an autonomous hovercraft to navigate a course and retrieve a payload.",
    feature: {
      type: "video",
      videoSrc: "./video/hovercraft.mp4",
    },
  },
  {
    title: "Amation - SVG Animator",
    year: 2013,
    description:
      "We won First Prize with Amation at Penn Apps X hackathon, an in-browser single page app for animating SVGs (like Adobe Flash).",
    feature: {
      type: "image",
      imgSrc: amation,
      alt: "A screenshot of the user interface of an SVG animation editor",
    },
  },
  {
    title: "Essential School Tools",
    year: 2013,
    description:
      "A React Native Web Chrome Extension and Android/iOS app that automatically synchronizes your course schedule, books, bus schedules, weather, and sport event schedules for easy reference.",
    feature: {
      type: "image",
      imgSrc: est,
      alt: "A screenshot of a phone running Essential School Tools",
    },
  },
];

export default projects;
