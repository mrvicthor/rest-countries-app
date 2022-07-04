import { WiDaySunny } from "react-icons/wi";
import { FaMoon } from "react-icons/fa";

interface Props {
  toggleTheme: boolean;
  setToggleTheme: React.Dispatch<React.SetStateAction<boolean>>;
}
const Navbar: React.FC<Props> = ({ toggleTheme, setToggleTheme }) => {
  return (
    <nav
      className={`border-b ${
        toggleTheme ? "border-b-[#141C2C]" : ""
      }  flex justify-between px-3 items-center py-6 ${
        toggleTheme ? "bg-[#2b3945]" : "bg-white"
      } md:px-12`}
    >
      <div
        className={`${
          toggleTheme ? "text-white" : "text-[#111517]"
        } font-semibold`}
      >
        Where in the world?
      </div>
      <div>
        {toggleTheme ? (
          <div
            className={`flex items-center gap-1 font-light ${
              toggleTheme ? "text-white" : "text-[#111517]"
            }`}
          >
            <FaMoon
              className="hover:cursor-pointer"
              onClick={() => setToggleTheme(!toggleTheme)}
            />
            Dark Mode
          </div>
        ) : (
          <div
            className={`flex items-center gap-1 ${
              toggleTheme ? "text-white" : "text-[#111517]"
            }`}
          >
            {" "}
            <WiDaySunny
              className="hover:cursor-pointer"
              onClick={() => setToggleTheme(!toggleTheme)}
            />{" "}
            Light Mode
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
