interface Props {
  toggleTheme: boolean;
  regions: any[];
  onSelect: (item: string) => void;
}

const ListGroup = ({ regions, toggleTheme, onSelect }: Props) => {
  return (
    <ul
      className={`absolute w-[200px] z-[10] ${
        !toggleTheme ? "bg-[#2b3945]" : "bg-white"
      } px-4 rounded-md space-y-2 py-4 ${
        !toggleTheme ? "text-white" : "text-[#111517]"
      }`}
    >
      {regions.map((region) => (
        <li
          key={region.id}
          className={`dropdownMenu cursor-pointer`}
          onClick={() => {
            onSelect(region.value);
            console.log(region.value);
          }}
        >
          {region.value}
        </li>
      ))}
    </ul>
  );
};
export default ListGroup;
