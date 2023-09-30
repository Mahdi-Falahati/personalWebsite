export default function SocialMedia({ icon, link, height, title }) {
  return (
    <a href={link}>
      <img
        src={icon}
        className={`${height || "h-12"} hover:animate-bounce animate-pulse`}
      />
      <span className="text-gray-400 text-sm font-bold">{title}</span>
    </a>
  );
}
