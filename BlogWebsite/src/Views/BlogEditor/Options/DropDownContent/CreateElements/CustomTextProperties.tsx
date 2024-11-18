import { useEffect, useState } from "react";
import { TextEditor } from "../../../../../Components/BlogComponents/EditorSlate/Editors/TextEditor";
import { initialCustomText, initialValue } from "../PropertiesUtils";
import "../Properties.css";
import {
  CustomText,
  textElement,
} from "../../../../../TypesDeclarations/BlogContentTypes";
import { useBlogContext } from "../../../../../GlobalVariables/BlogContext";
export const CustomTextProperties = () => {
  const [text, setText] = useState<CustomText[]>([initialCustomText]);
  const [agregar, setAgregar] = useState<boolean>(false);
  const { content, setContent } = useBlogContext();

  useEffect(() => {
    const actualContent = [...content.content];
    if (agregar) {
      const newTextElement: textElement = {
        type: "text",
        align: "center",
        children: text,
      };
      actualContent.push(newTextElement);
      setContent({ ...content, content: actualContent });
      setAgregar(false);
    }
  }, [text]);

  const onClickHandle = () => {
    setAgregar(true);
  };

  return (
    <div className="divProperties">
      <TextEditor
        content={initialValue}
        setText={setText}
        agregar={agregar}
        readOnly={false}
      ></TextEditor>
      <button
        onClick={() => {
          onClickHandle();
        }}
      >
        Agregar Componente
      </button>
    </div>
  );
};
