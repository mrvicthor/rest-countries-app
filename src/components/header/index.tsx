import { FaSearch } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { ListGroup } from "../../components";
import { useState } from "react";

interface Props {
  isDarkMode: boolean;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  selectedRegion: string;
  setSelectedRegion: (item: string) => void;
}

const Header: React.FC<Props> = ({
  isDarkMode,
  input,
  setInput,
  selectedRegion,
  setSelectedRegion,
}) => {
  const [showRegion, setShowRegion] = useState<boolean>(false);
  const handleSelect = (item: string) => {
    setSelectedRegion(item);
  };
  let regions: any = [
    { id: 1, value: "All" },
    { id: 2, value: "Africa" },
    { id: 3, value: "Americas" },
    { id: 4, value: "Asia" },
    { id: 5, value: "Europe" },
    { id: 6, value: "Oceania" },
  ];
  return (
    <section
      className={`py-6 px-4 ${!isDarkMode ? "bg-[#202c37]" : "bg-[#fafafa]"}`}
    >
      <div className="lg:px-4 lg:max-w-6xl mx-auto flex flex-col gap-10 md:flex-row md:justify-between">
        <div
          className={`flex items-center px-6 py-2 max-h-[55px] ${
            !isDarkMode ? "bg-[#2b3945]" : "bg-white"
          } rounded-md md:w-[31.25rem] myShadow`}
        >
          <FaSearch color={!isDarkMode ? "white" : "#111517"} className="" />
          <input
            type="text"
            value={input}
            className={`w-[100%] py-2 px-5 rounded-md bg-transparent outline-0 ${
              !isDarkMode ? "text-white" : "text-[#111517]"
            }`}
            placeholder="Search for a country..."
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        <div className="w-[12.5rem] space-y-1">
          <div
            onClick={() => setShowRegion(!showRegion)}
            className={`relative ${
              !isDarkMode ? "bg-[#2b3945]" : "bg-white"
            } w-[100%] px-5 py-4 rounded-md hover:cursor-pointer myShadow`}
          >
            <p
              className={` ${
                !isDarkMode ? "text-white" : "text-[#111517]"
              } text-sm`}
            >
              {selectedRegion ? selectedRegion : "Filter by Region"}
            </p>
            <RiArrowDropDownLine
              className={`absolute top-[50%] -translate-y-[50%] right-4 ${
                !isDarkMode ? "text-white" : "text-[#111517]"
              } cursor-pointer h-8 w-8 `}
            />
          </div>
          {showRegion && (
            <ListGroup
              regions={regions}
              isDarkMode={isDarkMode}
              onSelect={handleSelect}
              setShowRegion={setShowRegion}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Header;
