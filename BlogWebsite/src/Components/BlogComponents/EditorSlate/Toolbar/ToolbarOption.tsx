import { ReactEditor } from "slate-react";
import alignCenter from "./Assets/alignCenter.png";
import { useEffect, useState } from "react";
import { onClickHandle } from "../EditorUtils";
import { ColorPicker } from "./ColorPicker/ColorPicker";

interface optionProps {
  editor: ReactEditor | undefined;
}

export const ToolbarOption = (props: optionProps) => {
  const [fontSize, setFontSize] = useState<number>(20);
  const [fontColor, setFontColor] = useState<string>("#2e2e2e");
  const [enableColor, setEnableColor] = useState<boolean>(false);

  useEffect(() => {
    props.editor && props.editor.addMark("fontColor", fontColor);
    setEnableColor(false);
  }, [fontColor]);


  const options = [
    { type: "bold", style: { fontWeight: "bold" }, label: "B" },
    { type: "italic", style: { fontStyle: "italic" }, label: "I" },
    { type: "underline", style: { textDecoration: "underline" }, label: "U" },
    { type: "code", style: { fontFamily: "monospace" }, label: `</>` },
    {
      type: "fontSize",
      style: {},
      label: (
        <>
          <input
            onChange={(e) => onChangeInputHandler(e.target.value)}
            type="number"
            value={fontSize.toString()}
          />
        </>
      ),
    },
    {
      type: "center",
      style: { display: "flex", alignItems: "center" },
      label: (
        <>
          <img src={alignCenter} style={{ width: 20, height: 15 }}></img>
        </>
      ),
    },
  ];

  const onChangeInputHandler = (e: String) => {
    let newSize = +e;
    if (newSize > 5 && newSize < 50) setFontSize(newSize);
    props.editor && props.editor.addMark("fontSize", fontSize);
  };

  const onClickColorHandle = () => {
    enableColor ? setEnableColor(false) : setEnableColor(true);
  };

  return (
    <>
      {options.map((option) => {
        return (
          <div
            key={option.type}
            onClick={() => {
              props.editor && onClickHandle(option.type, props.editor);
            }}
            id="Option"
          >
            <p {...option} className="p_option">
              {option.label}
            </p>
          </div>
        );
      })}
      <div
        style={{ backgroundColor: fontColor }}
        id="Option"
        className="colorPicker"
        onClick={() => onClickColorHandle()}
      ></div>
      {enableColor && (
        <ColorPicker
          fontColor={fontColor}
          setFontColor={setFontColor}
        ></ColorPicker>
      )}
    </>
  );
};
