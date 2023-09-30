import { FaCopyright, FaTelegram } from "react-icons/fa6";
import call from "../Assets/Icons/call.svg";
import email from "../Assets/Icons/email.svg";

export default function Footer() {
  return (
    <footer className="flex flex-wrap justify-center md:justify-around my-5 border-t border-gray-400 pt-5">
      <p className="md:w-auto w-full justify-center flex items-center">
        <img src={call} className="h-10 mr-2" />
        <a href="tel:+989021571617">+989021571617</a>
      </p>
      <p className="md:w-auto md:my-0 my-2 w-full flex items-center justify-center">
        <img src={email} className="h-10 mr-2" />
        <a href="mailto:falahatimahdi@gmail.com">falahatimahdi@gmail.com</a>
      </p>
      <p className="md:w-auto md:mb-0 mb-2 w-full flex items-center justify-center">
        <FaCopyright className="text-2xl inline-block mr-2" />
        Created By
        <a
          href="https://telegram.me/Mahdi_Falahatii"
          className="ml-2 border-b border-gray-400 hover:animate-pulse font-bold italic"
        >
          Mahdi-Falahati
          <FaTelegram className="inline-block ml-2" />
        </a>
      </p>
    </footer>
  );
}
