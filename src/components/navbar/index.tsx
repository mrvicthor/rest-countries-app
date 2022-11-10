import { WiDaySunny } from "react-icons/wi";
import { FaMoon } from "react-icons/fa";

type NavbarProps = {
  isDarkMode: boolean;
  toggle: () => void;
};

const Navbar = ({ isDarkMode, toggle }: NavbarProps) => {
  return (
    <nav
      className={`border-b ${
        !isDarkMode ? "border-b-[#141C2C" : ""
      }  flex justify-between px-3 items-center py-6 ${
        !isDarkMode ? "bg-[#2b3945]" : "bg-white"
      } md:px-12`}
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
            onClick={() => {
              toggle();
              console.log("clicked");
            }}
            className={`flex items-center gap-1 font-light ${
              !isDarkMode ? "text-white" : "text-[#111517]"
            } hover:cursor-pointer`}
          >
            <WiDaySunny className="hover:cursor-pointer" />
            <span className="font-light">Light Mode</span>
          </div>
        ) : (
          <div
            onClick={() => {
              toggle();
              console.log("clicked");
            }}
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
  );
};

export default Navbar;
