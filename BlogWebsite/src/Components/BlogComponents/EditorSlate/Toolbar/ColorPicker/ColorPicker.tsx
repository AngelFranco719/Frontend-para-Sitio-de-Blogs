import React from "react";
import { ColorResult, BlockPicker } from "react-color";
import "./ColorPicker.css";

interface colorpickerProps {
  fontColor: string;
  setFontColor: React.Dispatch<React.SetStateAction<string>>;
}

export const ColorPicker = (props: colorpickerProps) => {
  const handleOnChange = (color: ColorResult) => {
    props.setFontColor(color.hex);
  };

  return (
    <>
      <div id="ColorPicker">
        <BlockPicker
          color={props.fontColor}
          onChangeComplete={(color) => handleOnChange(color)}
        ></BlockPicker>
      </div>
    </>
  );
};
