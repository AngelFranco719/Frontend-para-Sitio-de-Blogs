import { useEffect, useState } from "react";
import "../Properties.css";
import { TextEditor } from "../../../../../Components/BlogComponents/EditorSlate/Editors/TextEditor";
import {
  CustomText,
  LeftImageText,
} from "../../../../../TypesDeclarations/BlogContentTypes";
import { initialCustomText, initialValue } from "../PropertiesUtils";
import { useBlogContext } from "../../../../../GlobalVariables/BlogContext";

export const LeftImageTextProperties = () => {
  const [url, setURL] = useState<string>("");
  const [titulo, setTitulo] = useState<string>("");
  const [buscar, setBuscar] = useState<boolean>(false);
  const [agregar, setAgregar] = useState<boolean>(false);
  const [text, setText] = useState<CustomText[]>([initialCustomText]);
  const { content, setContent } = useBlogContext();

  const handleURLChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const actualURL = event.target.value;
    setBuscar(false);
    setURL(actualURL);
  };

  const handleClickBuscar = () => {
    setBuscar(true);
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const actualTitle = event.target.value;
    setTitulo(actualTitle);
  };

  const initializeComponent = () => {
    const newComponent: LeftImageText = {
      type: "LeftImageText",
      title: titulo,
      image: url,
      children: text,
    };

    const actualContent = content.content;
    actualContent.push(newComponent);
    setContent({ ...content, content: actualContent });
  };

  useEffect(() => {
    if (agregar) {
      initializeComponent();
    }
  }, [text]);

  return (
    <div className="divProperties">
      <div className="insertTitle">
        <p>Ingresa un Título:</p>
        <input
          onChange={(event) => {
            handleTitleChange(event);
          }}
          type="text"
          placeholder="Ingresa el título"
        ></input>
      </div>
      <p>Inserta una Imágen: </p>
      <div className="insertImage">
        <input
          onChange={(event) => {
            handleURLChange(event);
          }}
          type="text"
          placeholder="Inserta una URL válida"
        ></input>
        <button
          onClick={() => {
            handleClickBuscar();
          }}
        >
          Buscar
        </button>
      </div>
      <div className="imagePreview">{buscar && <img src={url}></img>}</div>
      <p>Inserta el Texto: </p>
      <div className="insertText">
        <TextEditor
          agregar={agregar}
          readOnly={false}
          setText={setText}
          content={initialValue}
        ></TextEditor>
      </div>
      <button onClick={() => setAgregar(true)}>Agregar Componente</button>
    </div>
  );
};
