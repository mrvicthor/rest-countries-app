import { WiDaySunny } from "react-icons/wi";
import { FaMoon } from "react-icons/fa";

type NavbarProps = {
  isDarkMode: boolean;
  toggle: () => void;
};

const Navbar = ({ isDarkMode, toggle }: NavbarProps) => {
  return (
    <header
      className={`${
        !isDarkMode ? "border-b-[#141C2C bg-[#2b3945]" : "bg-white"
      } border-b `}
    >
      <nav
        className={`flex justify-between px-3 items-center py-6 lg:max-w-6xl mx-auto`}
      >
        <div
          className={`${
            !isDarkMode ? "text-white" : "text-[#111517]"
          } font-semibold`}
        >
          Where in the world?
        </div>
        <div>
          {!isDarkMode ? (
            <div
              onClick={() => toggle()}
              className={`flex items-center gap-1 font-light ${
                !isDarkMode ? "text-white" : "text-[#111517]"
              } hover:cursor-pointer`}
            >
              <WiDaySunny className="hover:cursor-pointer" />
              <span className="font-light">Light Mode</span>
            </div>
          ) : (
            <div
              onClick={() => toggle()}
              className={`flex items-center gap-1 ${
                !isDarkMode ? "text-white" : "text-[#111517]"
              } hover:cursor-pointer`}
            >
              {" "}
              <FaMoon className="hover:cursor-pointer" />
              <span className="font-light">Dark Mode</span>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
