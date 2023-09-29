import CardAnim from "./CardAnimation/CardAnim";
import { GiEvilBook, GiWorld } from "react-icons/gi";

import RC from "../Assets/RC.png";

export default function AboutMe() {
  return (
    <section className="mt-3 pt-1 px-1 sm:px-16">
      <div className="mt-4 flex flex-col sm:flex-row items-center justify-around">
        <p className="bg-orange-600 rounded w-5/6 sm:w-1/3 h-1"></p>
        <h1 className="text-center my-2 sm:my-0 text-3xl font-bold">
          ABOUT ME
        </h1>
        <p className="bg-cyan-500 rounded w-5/6 sm:w-1/3 h-1 "></p>
      </div>
      <section className="my-20 h-full flex flex-wrap justify-around align-center">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="my-10"
        >
          <CardAnim
            title="My hobbies are...."
            habbies={habbies}
            img={{
              alt: "RC",
              title: "RC",
              src: RC,
            }}
          />
        </div>
        <section
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="sm:px-4 px-1 w-full sm:w-96 my-10"
        >
          <h1 className="font-bold text-left mb-4">
            EDUCATION
            <GiEvilBook className="ml-2 inline" />
          </h1>
          <section>
            {educations?.map((item, id) => {
              return (
                <div key={id} className="my-3 py-1 border-b border-gray-300">
                  <h2
                    className={`font-bold ${
                      item.color ? item.color : "text-info"
                    } tracking-widest`}
                  >
                    <p>- {item.title}</p>
                  </h2>
                  <p className="font-medium text-gray-400 text-sm">
                    {item.description}
                  </p>
                  <p className="font-medium flex items-center text-gray-500 text-sm">
                    <GiWorld className="inline mr-1" />
                    {item.location}
                  </p>
                </div>
              );
            })}
          </section>
        </section>
      </section>
    </section>
  );  
}

const habbies = [
  "Play chess",
  "Write code & Read the source code",
  "Listen to music",
  "Go to Gym",
  "Listen to the podcast",
];

const educations = [
  {
    title: "APSignals",
    description: "Fullstack Certificate obtained from a bootcamp",
    color: "text-info",
    location: "London, UK",
  },
  {
    title: "Gonbad Kavous University",
    description: "Bachelor of Computer Engineering ( concentration: software )",
    color: "text-purple-700",
    location: "Golestan, Iran",
  },
  {
    title: "CS50X",
    description: "computer science Certificate obtained from CS50X",
    color: "text-yellow-500",
    location: "Cambridge, Massachusetts, USA",
  },
];
