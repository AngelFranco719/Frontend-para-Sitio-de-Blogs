import { SetStateAction, useEffect, useState } from "react";
import "./Properties.css";
import {
  CustomText,
  targetElement,
} from "../../../../TypesDeclarations/BlogContentTypes";
import { TextEditor } from "../../../../Components/BlogComponents/EditorSlate/Editors/TextEditor";
import { initialCustomText, initialValue } from "./PropertiesUtils";
import { useBlogContext } from "../../../../BlogContext";

interface propsTarget {
  setFinished: React.Dispatch<SetStateAction<boolean>>;
}

export const TargetProperties = (props: propsTarget) => {
  const [url, setUrl] = useState<string>("");
  const [search, setSearch] = useState<boolean>(false);
  const [text, setText] = useState<CustomText[]>([initialCustomText]);
  const [title, setTitle] = useState<string>("");
  const [agregar, setAgregar] = useState<boolean>(false);

  const { content, setContent } = useBlogContext();

  const handleClick = () => {
    setSearch(true);
  };
  const getURL = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(false);
    setUrl(event.target.value);
  };

  const getTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  useEffect(() => {
    if (agregar) {
      inicializarTargetElement();
      props.setFinished(true);
    }
  }, [text]);

  const inicializarTargetElement = () => {
    const newTargetElement: targetElement = {
      type: "target",
      backgroundColor: "#fffef3",
      children: text,
      title: title,
      image: url,
    };
    const actualContent = [...content.content];
    actualContent.push(newTargetElement);
    setContent({ ...content, content: actualContent });
  };

  return (
    <div className="divProperties">
      <p>Inserta el Título:</p>
      <div className="insertTitle">
        <input
          onChange={(event) => getTitle(event)}
          placeholder="Inserta un Título..."
        ></input>
      </div>
      <p>Inserta una Imágen: </p>
      <div className="insertImage">
        <input
          onChange={(event) => getURL(event)}
          type="text"
          placeholder="Inserta un URL válido"
        ></input>
        <button onClick={() => handleClick()}>Buscar</button>
      </div>
      {search && (
        <div className="imagePreview">
          <img src={url}></img>
        </div>
      )}
      <p>Inserta el Texto:</p>
      <div className="insertText">
        <TextEditor
          agregar={agregar}
          setText={setText}
          content={initialValue}
        ></TextEditor>
      </div>
      <button
        onClick={() => {
          setAgregar(true);
        }}
        style={{ marginTop: "15px" }}
      >
        Agregar Componente
      </button>
    </div>
  );
};
