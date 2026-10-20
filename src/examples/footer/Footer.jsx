import { FaHeart } from "react-icons/fa";

const links = ["Creative Tim", "About Us", "Blog", "License"];

const Footer = () => (
  <footer className="flex flex-col md:flex-row items-center md:justify-between gap-4 py-6 text-gray-400 font-semibold">
    <p className="flex flex-wrap items-center justify-center gap-1 text-center">
      <span>© 2026, made with</span>
      <FaHeart className="text-gray-500" />
      <span>by</span>
      <span className="text-gray-500 font-bold cursor-pointer">Creative Tim</span>
      <span>for a better web.</span>
    </p>

    <ul className="flex gap-6">
      {links.map((link) => (
        <li key={link} className="cursor-pointer hover:text-gray-600">
          {link}
        </li>
      ))}
    </ul>
  </footer>
);

export default Footer;