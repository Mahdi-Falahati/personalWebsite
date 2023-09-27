import classNames from "classnames";
import styles from "./MainHeader.module.css";
import Logo from "../Assets/Icons/Logo.png";

export default function MainHeader() {
  return (
    <header className="relative border-b border-gray-300 h-16 flex items-center">
      <input type="checkbox" id="nav-toggle" className={styles.checkbox} />
      <label htmlFor="nav-toggle" className={styles.button}>
        <span></span>
        <span></span>
        <span></span>
      </label>
      <ul className={styles.header_items}>
        {navItems?.map((item, id) => {
          return (
            <li key={id} className={headerItem}>
              <a>{item}</a>
            </li>
          );
        })}
      </ul>
      <div className="ml-[auto] px-3.5">
        <a className="cursor-pointer">
          <img src={Logo} title="RC" alt="RC" className="h-11" />
        </a>
      </div>
    </header>
  );
}

const navItems = ["Home", "About ME", "Projects", "concat ME"];
const headerItem = classNames(
  "w-24",
  "font-bold",
  "text-center",
  "whitespace-nowrap",
  "cursor-pointer",
  "hover:text-gray-500"
);
