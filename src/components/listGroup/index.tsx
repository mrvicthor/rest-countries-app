interface Props {
  isDarkMode: boolean;
  regions: any[];
  onSelect: (item: string) => void;
  setShowRegion: React.Dispatch<React.SetStateAction<boolean>>;
}

const ListGroup = ({ regions, isDarkMode, onSelect, setShowRegion }: Props) => {
  return (
    <ul
      className={`absolute w-[200px] z-[10] ${
        !isDarkMode ? "bg-[#2b3945]" : "bg-white"
      } px-4 rounded-md space-y-2 py-4 ${
        !isDarkMode ? "text-white" : "text-[#111517]"
      } myShadow`}
    >
      {regions.map((region) => (
        <li
          key={region.id}
          className={`dropdownMenu cursor-pointer`}
          onClick={() => {
            onSelect(region.value);
            setShowRegion(false);
          }}
        >
          {region.value}
        </li>
      ))}
    </ul>
  );
};
export default ListGroup;
