import React from "react";

const socials = [
  { name: "GitHub", url: "https://github.com/MAVIVO1" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/haile-kidu-2ab70" },
  { name: "Telegram", url: "https://t.me/@HAILE_kid" },
];

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center gap-4 py-10 px-6 relative z-10">
      <div className="flex flex-wrap justify-center gap-6">
        {socials.map((s) => (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noreferrer"
            className="text-secondary hover:text-white text-[15px] font-medium transition-colors"
          >
            {s.name}
          </a>
        ))}
      </div>
      <p className="text-secondary text-[13px]">
        © {new Date().getFullYear()} Hailemariam Geremew. Built with React,
        Three.js &amp; Tailwind CSS.
      </p>
    </footer>
  );
};

export default Footer;
