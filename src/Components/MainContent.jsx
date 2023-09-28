import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TypeWriting from "./TypeWriting/TypeWriting";
import devSrc from "../Assets/dev.png";
import styles from "./mainContent.module.css";
import { GiBleedingEye } from "react-icons/gi";

export default function MainContent() {
  useEffect(() => {
    AOS.init({ duration: "1250" });
  }, []);
  return (
    <section
      className="flex flex-wrap justify-around items-center"
      style={{ height: "90vh" }}
    >
      <section data-aos="fade-right" className="w-1/2 md:w-1/3">
        <img src={devSrc} title="Developer" alt="Developer" />
      </section>
      <section
        data-aos="fade-left"
        className="w-3/4 lg:w-1/2 xl:w-1/3 flex justify-center items-center flex-col"
      >
        <TypeWriting />
        <p
          data-aos="zoom-in-down"
          className="mt-4 px-2 font-thin sm:px-5 py-2 whitespace-nowrap sm:font-bold text-center bg-purple-950 text-white rounded-full"
        >
          JUNIOR [ FRONT-END ] DEVELOPER
        </p>
        <p className="mt-3 px-3 border-x border-gray-400 text-center font-medium text-gray-600 text-sm">
          A developer with 2 years of recent focus on web development who is
          eager to learn new things and enjoy experiencing new challenges, Also
          interested in play chess
        </p>
        <section className="mt-4">
          <a
            className={styles.BtnTarget}
            href="../Assets/CV-Mahdi-Falahati.pdf"
            download
          >
            <span>
              Resume <GiBleedingEye className="inline" />{" "}
            </span>
          </a>
        </section>
      </section>
    </section>
  );
}
