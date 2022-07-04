import { FaSearch } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import React, { useState } from "react";

interface Props {
  toggleTheme: boolean;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

const Countries: React.FC<Props> = ({ toggleTheme, input, setInput }) => {
  const [showRegion, setShowRegion] = useState<boolean>(false);

  return (
    <>
      <div className="py-6 px-4 md:px-12">
        <div className=" flex flex-col gap-10 md:flex-row md:justify-between">
          <div
            className={` flex items-center px-6 py-2 max-h-[55px] ${
              toggleTheme ? "bg-[#2b3945]" : "bg-white"
            } rounded-md md:w-[31.25rem]`}
          >
            <FaSearch color={toggleTheme ? "white" : "#111517"} className="" />
            <input
              type="text"
              value={input}
              className={`w-[100%] py-2 px-5 rounded-md bg-transparent outline-0 ${
                toggleTheme ? "text-white" : "text-[#111517]"
              }`}
              placeholder="Search for a country..."
              onChange={(e) => setInput(e.target.value)}
            />
          </div>

          <div className="w-[200px] space-y-1">
            <div
              className={`relative ${
                toggleTheme ? "bg-[#2b3945]" : "bg-white"
              } w-[100%] px-5 py-4 rounded-md`}
            >
              <p
                className={` ${
                  toggleTheme ? "text-white" : "text-[#111517]"
                } text-sm`}
              >
                Filter by Region
              </p>
              <RiArrowDropDownLine
                onClick={() => setShowRegion(!showRegion)}
                className={`absolute top-[50%] -translate-y-[50%] right-4 ${
                  toggleTheme ? "text-white" : "text-[#111517]"
                }`}
              />
            </div>
            {showRegion && (
              <ul
                className={`absolute w-[200px] z-[10] ${
                  toggleTheme ? "bg-[#2b3945]" : "bg-white"
                } px-4 rounded-md space-y-2 py-4 ${
                  toggleTheme ? "text-white" : "text-[#111517]"
                }`}
              >
                <li>Africa</li>
                <li>America</li>
                <li>Asia</li>
                <li>Europe</li>
                <li>Oceania</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Countries;