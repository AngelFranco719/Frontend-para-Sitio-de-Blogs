import { useState } from "react";
import "../Properties.css";
import { useBlogContext } from "../../../../../BlogContext";
import { HorizontalContainer } from "../../../../../TypesDeclarations/BlogContentTypes";
import { v4 as uuidv4 } from "uuid";
import React from "react";

export const HorizontalContainerProperties = () => {
  const [color, setColor] = useState<string>("");
  const { content, setContent } = useBlogContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = event.target.value;
    setColor(newColor);
  };

  const onClickHandle = () => {
    const id = uuidv4();
    const actualcontent = [...content.content];
    const newContainer: HorizontalContainer = {
      type: "HorizontalContainer",
      backgroundColor: color,
      ID_Container: id,
      children: [],
    };
    actualcontent.push(newContainer);

    setContent({ ...content, content: actualcontent });
  };

  return (
    <div
      style={{
        width: "100%",
        padding: "0px",
      }}
      className="divProperties"
    >
      <div className="selectColor">
        <p>Color de Fondo:</p>
        <input
          onChange={(event) => {
            handleChange(event);
          }}
          type="color"
        ></input>
      </div>
      <button
        onClick={() => {
          onClickHandle();
        }}
        style={{ marginTop: "0px", marginBottom: "20px" }}
      >
        Agregar Contenedor
      </button>
    </div>
  );
};
