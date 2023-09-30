export default function SocialMedia({ icon, link, height }) {
  return (
    <a href={link}>
      <img
        src={icon}
        className={`${height || "h-12"} hover:animate-bounce animate-pulse`}
      />
    </a>
  );
}
