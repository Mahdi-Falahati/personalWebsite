import { FaCopyright, FaTelegram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="text-center my-5 border-t border-gray-400 pt-5">
      <FaCopyright className="text-2xl inline-block mr-2" />
      <p className="inline-block">
        Created By
        <a
          href="https://telegram.me/Mahdi_Falahatii"
          className="ml-2 border-b border-gray-400 hover:animate-pulse font-bold italic"
        >
          Mahdi-Falahati{" "}
          <FaTelegram className="inline-block" />
        </a>
      </p>
    </footer>
  );
}
