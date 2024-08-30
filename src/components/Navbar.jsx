import logo from "../assets/AB2.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="w-17 h-8" />
      </div>
      <div className="m-8 flex item-center justify-center gap-4 text-2xl text-white">
        <a href="https://www.linkedin.com/in/aryan-bhandare/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/bhandarearyan" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://x.com/wretchsfavorite" target="_blank" rel="noopener noreferrer">
          <FaXTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

