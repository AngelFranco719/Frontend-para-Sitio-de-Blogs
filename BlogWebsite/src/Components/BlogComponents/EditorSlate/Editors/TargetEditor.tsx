import { useState } from "react";
import { createEditor } from "slate";
import { Editable, ReactEditor, Slate, withReact } from "slate-react";
import "./Editor.css";
import { TypeBlock } from "../TypeBlock";
import { TypeLeaf } from "../TypeLeaf";
import { targetElement } from "../../TypesDefinitions";

interface propEditor {
  setEditorActual: React.Dispatch<
    React.SetStateAction<ReactEditor | undefined>
  >;
  target: targetElement;
}

export const TargetEditor = (props: propEditor) => {
  const [editorContenido] = useState(() => withReact(createEditor()));
  const initialValue: targetElement[] = [props.target];
  return (
    <>
      <div
        style={{ backgroundColor: props.target.backgroundColor }}
        className="targetEditor"
      >
        <img src={props.target.image}></img>
        <h3 style={{ marginBottom: "10px" }}>{props.target.title}</h3>
        <Slate
          editor={editorContenido}
          initialValue={initialValue}
          onChange={() => props.setEditorActual(editorContenido)}
        >
          <Editable
            renderElement={(props) => {
              return (
                <TypeBlock editor={editorContenido} renderElement={props} />
              );
            }}
            renderLeaf={(props) => {
              return <TypeLeaf editor={editorContenido} leafProps={props} />;
            }}
          ></Editable>
        </Slate>
      </div>
    </>
  );
};
