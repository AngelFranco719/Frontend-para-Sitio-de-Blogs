import { Slate, Editable, withReact, ReactEditor } from "slate-react";
import { TypeLeaf } from "../TypeLeaf";
import { TypeBlock } from "../TypeBlock";
import "./Editor.css";
import { useState } from "react";
import { createEditor } from "slate";
import { textElement } from "../../TypesDefinitions";

interface propEditor {
  setEditorActual: React.Dispatch<
    React.SetStateAction<ReactEditor | undefined>
  >;
  content: textElement;
}

export const TextEditor = (props: propEditor) => {
  const [editor] = useState(() => withReact(createEditor()));

  const initialValue = [props.content];

  return (
    <>
      <div id="divEditor">
        <Slate
          editor={editor}
          initialValue={initialValue}
          onChange={() => props.setEditorActual(editor)}
        >
          <Editable
            renderElement={(props) => {
              return <TypeBlock editor={editor} renderElement={props} />;
            }}
            renderLeaf={(props) => {
              return <TypeLeaf leafProps={props} editor={editor} />;
            }}
          ></Editable>
        </Slate>
      </div>
    </>
  );
};
