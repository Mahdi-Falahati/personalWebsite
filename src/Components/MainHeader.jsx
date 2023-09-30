import classNames from "classnames";
import styles from "./MainHeader.module.css";
import Logo from "../Assets/Icons/Logo.png";
import { GiBarracksTent, GiBandit, GiBubblingFlask, GiAnglerFish } from "react-icons/gi";

export default function MainHeader() {
  return (
    <nav className="relative border-b border-gray-300 h-16 flex items-center">
      <input type="checkbox" id="nav-toggle" className={styles.checkbox} />
      <label htmlFor="nav-toggle" className={styles.button}>
        <span></span>
        <span></span>
        <span></span>
      </label>
      <ul className={styles.header_items}>
        {navItems?.map(({ name, icon ,href}, id) => {
          return (
            <li key={id} className={headerItem}>
              <a href={href} className="flex items-center">
                {icon}
                {name}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="ml-[auto] px-3.5">
        <a className="cursor-pointer">
          <img src={Logo} title="RC" alt="RC" className="h-11" />
        </a>
      </div>
    </nav>
  );
}
const navItems = [
  { name: "Home",href:"#", icon: <GiBarracksTent className="mr-1 text-green-900" /> },
  { name: "Projects", href:"#OpenSourceProjects",icon: <GiBubblingFlask className="mr-1 text-purple-900" /> },
  { name: "About ME",href:"#AboutMe", icon: <GiBandit className="mr-1 text-red-700" /> },
  { name: "Contact ME",href:"#ConcatME", icon: <GiAnglerFish className="mr-1 text-blue-900" /> },
];
const headerItem = classNames(
  "mx-3",
  "font-bold",
  "text-center",
  "whitespace-nowrap",
  "cursor-pointer",
  "hover:opacity-75"
);
