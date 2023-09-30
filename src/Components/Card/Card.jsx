import rc from "../../Assets/RC.png";
import styles from "./card.module.css";
import { GiWarlockEye } from "react-icons/gi";
import { FaGithub } from "react-icons/fa";

export default function Card({ img, link, title, tecnologhy, decription }) {
  return (
    <div className={`w-80 shadow-2xl rounded-md ${styles.card}`}>
      <div className="flex justify-center w-full border-b border-gray-500">
        <img src={img.src} title={img.title} alt={img.alt} className="h-60" />
      </div>
      <div className="py-4 px-2">
        <h3 className="font-bold pl-2">- {title}</h3>
        <ul className="text-gray-400 pt-3 flex flex-wrap justify-around items-center">
          {tecnologhy?.map((tec, id) => (
            <li
              key={id}
              className="border my-1 border-gray-400 rounded-md px-3"
            >
              {tec}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.cardSummary}>
        <p className="flex justify-center items-center h-5/6">{decription}</p>
        <div className="flex justify-between">
          <a
            href={link.live}
            className="hover:animate-bounce border rounded-md px-3 py-2 hover:bg-white hover:text-black"
          >
            <GiWarlockEye className="inline-block text-3xl" /> Live
          </a>
          <a
            href={link.code}
            className="hover:animate-bounce border rounded-md px-3 py-2 hover:bg-white hover:text-black"
          >
            <FaGithub className="inline-block text-3xl" /> Code
          </a>
        </div>
      </div>
    </div>
  );
}
