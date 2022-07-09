import { WiDaySunny } from "react-icons/wi";
import { FaMoon } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "./Layout";

interface Props {
  toggleTheme: () => void;
}

const Navbar: React.FC<Props> = ({ toggleTheme }) => {
  const { lightTheme } = useContext(ThemeContext);

  return (
    <nav
      className={`border-b ${
        !lightTheme ? "border-b-[#141C2C]" : ""
      }  flex justify-between px-3 items-center py-6 ${
        !lightTheme ? "bg-[#2b3945]" : "bg-white"
      } md:px-12`}
    >
      <div
        className={`${
          !lightTheme ? "text-white" : "text-[#111517]"
        } font-semibold`}
      >
        Where in the world?
      </div>
      <div>
        {!lightTheme ? (
          <div
            className={`flex items-center gap-1 font-light ${
              !lightTheme ? "text-white" : "text-[#111517]"
            }`}
          >
            <FaMoon
              className="hover:cursor-pointer"
              onClick={() => toggleTheme()}
            />
            <span className="font-light">Dark Mode</span>
          </div>
        ) : (
          <div
            className={`flex items-center gap-1 ${
              !lightTheme ? "text-white" : "text-[#111517]"
            }`}
          >
            {" "}
            <WiDaySunny
              className="hover:cursor-pointer"
              onClick={() => toggleTheme()}
            />
            <span className="font-light">Light Mode</span>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
