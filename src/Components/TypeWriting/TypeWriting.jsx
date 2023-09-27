import styles from "./typeWriting.module.css";
import { GiDelighted } from "react-icons/gi";

export default function TypeWriting({ text }) {
  return (
    <p
      className={
        styles.typewriter + " p-2 border-y border-dotted border-gray-500"
      }
    >
      {text}
      {!text && (
        <>
          I am
          <GiDelighted className="mx-1 inline text-red-600" />
          <span className="text-red-900">Mahdi-Falahati (RC)</span>
        </>
      )}
    </p>
  );
}
