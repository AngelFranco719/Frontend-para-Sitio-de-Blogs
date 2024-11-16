import { useState } from "react";
import { Properties } from "./DropDownContent/Properties";

interface optionProp {
  id: number;
  type: string;
  name: string;
  style: string;
  selectedContainer: string | undefined;
}

export const Option = (option: optionProp) => {
  const [selected, setSelected] = useState<boolean>(false);
  const [typeSelected, setTypeSelected] = useState<string>("");
  const handleClick = (type: string) => {
    !selected ? setSelected(true) : setSelected(false);
    typeSelected != type ? setTypeSelected(type) : setTypeSelected("");
  };

  return (
    <div key={option.id} className="option">
      <button onClick={() => handleClick(option.type)} className="dropDown">
        <div className="dropDownContent">
          <span className={option.style}></span>
          <p>{option.name}</p>
          <span className="arrow">{selected ? "▲" : "▼"}</span>
        </div>
      </button>
      <Properties
        typeSelected={typeSelected}
        selectedContainer={option.selectedContainer}
      ></Properties>
    </div>
  );
};
