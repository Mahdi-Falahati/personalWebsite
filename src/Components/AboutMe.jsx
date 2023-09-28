import CardAnim from "./CardAnimation/CardAnim";
import RC from "../Assets/RC.jpg";

export default function AboutMe() {
  return (
    <section className="mt-3 pt-1 h-screen">
      <div className="mt-4 flex flex-col sm:flex-row items-center justify-around">
        <p className="bg-orange-600 rounded w-5/6 sm:w-1/3 h-1"></p>
        <h1 className="text-center my-2 sm:my-0 text-3xl font-bold">
          ABOUT ME
        </h1>
        <p className="bg-cyan-500 rounded w-5/6 sm:w-1/3 h-1 "></p>
      </div>
      <section className="mt-8 h-full flex flex-wrap justify-around align-center">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
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
      </section>
    </section>
  );
}

const habbies = [
  "listening to music",
  "playing chess",
  "Writing code & Reading the source code",
];
