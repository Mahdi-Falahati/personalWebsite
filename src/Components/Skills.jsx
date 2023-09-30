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
import mui from "../Assets/Icons/mui.svg";

export default function Skills() {
  return (
    <div className="bg-purple-900 pt-8 pb-1">
      <section className="flex justify-center items-center border-b border-white pb-3">
        <h2 className="text-center tracking-widest	 text-white text-3xl font-bold">
          SKILLS
        </h2>
        <GiBlackHoleBolas className="ml-5 text-white text-3xl" />
      </section>
      <section>
        <section className=" my-8 flex justify-around items-center flex-wrap">
          <div className="py-5 px-2 rounded-2xl mb-5 w-11/12 md:w-1/2 bg-white">
            <Slider
              images={advance}
              aniamte="animate-pulse"
              hoverAniamte="animate-bounce"
              height="h-14"
              slidesPerView={4}
            />
          </div>
          <div className="py-5 px-2 rounded-2xl mb-5 w-11/12 md:w-1/3 bg-white">
            <Slider
              images={base}
              height="h-14"
              delay="3000"
              slidesPerView={4}
              aniamte="animate-pulse"
              hoverAniamte="animate-bounce"
            />
          </div>
        </section>
      </section>
    </div>
  );
}

const base = [html, css, tailwindcss, js, python, figma, git];

const advance = [
  reactjs,
  redux,
  mui,
  reactRouterDom,
  jest,
  nodejs,
  nextjs,
  mongodb,
];
