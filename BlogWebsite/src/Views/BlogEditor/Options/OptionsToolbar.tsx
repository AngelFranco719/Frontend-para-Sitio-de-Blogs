import "./ComponentOptions.css";
import "./Icons.css";
import { Option } from "./Option";

export const OptionsToolbar = () => {
  const options = [
    {
      id: 1,
      type: "CustomText",
      name: "Texto",
      style: "TextIcon",
    },
    {
      id: 2,
      type: "TargetElement",
      name: "Agregar Tarjeta",
      style: "TargetIcon",
    },
    {
      id: 3,
      type: "HorizontalContainer",
      name: "Agregar Contenedor Horizontal",
      style: "HorizontalContainerIcon",
    },
  ];

  return (
    <>
      <div className="optionToolbar">
        <div id="HeaderOptions">
          <p>Barra de Herramientas</p>
        </div>
        {options.map((option) => {
          return (
            <Option
              key={option.id}
              id={option.id}
              name={option.name}
              style={option.style}
              type={option.type}
            />
          );
        })}
      </div>
    </>
  );
};
