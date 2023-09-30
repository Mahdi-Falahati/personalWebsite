import { GiBlackHoleBolas } from "react-icons/gi";
import Slider from "./Slider/Slider";

import css from "../Assets/Icons/css.svg";
import html from "../Assets/Icons/html.svg";
import figma from "../Assets/Icons/figma.svg";
import jest from "../Assets/Icons/jest.svg";
import js from "../Assets/Icons/js.svg";
import mongodb from "../Assets/Icons/mongodb.svg";
import nextjs from "../Assets/Icons/nextjs.svg";
import nodejs from "../Assets/Icons/nodejs.svg";
import python from "../Assets/Icons/python.svg";
import reactRouterDom from "../Assets/Icons/react-router-dom.svg";
import reactjs from "../Assets/Icons/reactjs.svg";
import tailwindcss from "../Assets/Icons/tailwindcss.svg";
import redux from "../Assets/Icons/redux.svg";
import git from "../Assets/Icons/git.svg";

export default function Skills() {
  return (
    <div className="bg-purple-900 py-8">
      <section className="flex justify-center items-center border-b border-white pb-3">
        <h2 className="text-center text-white text-3xl font-bold">SKILLS</h2>
        <GiBlackHoleBolas className="ml-5 text-white text-3xl" />
      </section>
      <section>
        <div
          className="py-5 bg-white my-4"
          data-aos="fade-right"
        >
          <Slider images={src} height="h-14" />
        </div>
      </section>
    </div>
  );
}

const src = [
  html,
  css,
  tailwindcss,
  js,
  reactjs,
  redux,
  reactRouterDom,
  jest,
  nodejs,
  nextjs,
  mongodb,
  python,
  figma,
  git,
];
