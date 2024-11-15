import "./ComponentOptions.css";
import "./Icons.css";
import { Option } from "./Option";

interface propsOptions {
  selectedContainer: string | undefined;
}

export const OptionsToolbar = (props: propsOptions) => {
  const options = [
    {
      id: 1,
      type: "CustomText",
      name: "Agregar Texto",
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
      type: "Caroussel",
      name: "Agregar Carrusel",
      style: "CarousselIcon",
    },
    {
      id: 4,
      type: "LeftImageText",
      name: "Sección Imágen/Texto",
      style: "LeftTextImageIcon",
    },
    {
      id: 5,
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
              selectedContainer={props.selectedContainer}
            />
          );
        })}
      </div>
    </>
  );
};
