import styles from "./typeWriting.module.css";

export default function TypeWriting({ text }) {
  return (
    <p
      className={
        styles.typewriter + " py-2 border-y border-dotted border-gray-500"
      }
    >
      {text}
      {!text && (
        <>
          I AM <span className="text-red-700">Mahdi-Falahati (RC)</span>
        </>
      )}
    </p>
  );
}
