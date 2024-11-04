import { Slate, Editable, withReact } from "slate-react";
import { TypeLeaf } from "../TypeLeaf";
import { TypeBlock } from "../TypeBlock";
import "./Editor.css";
import { SetStateAction, useEffect, useState } from "react";
import { createEditor } from "slate";
import {
  CustomText,
  textElement,
} from "../../../../TypesDeclarations/BlogContentTypes";
import { Toolbar } from "../Toolbar/Toolbar";
import { isText } from "../../Blog/BlogTypeGuards";

interface propEditor {
  content: textElement;
  setText: React.Dispatch<SetStateAction<CustomText[]>>;
  agregar: boolean;
}

export const TextEditor = (props: propEditor) => {
  const [editor] = useState(() => withReact(createEditor()));

  useEffect(() => {
    if (props.agregar && isText(editor.children[0])) {
      props.setText(editor.children[0].children);
    }
    console.log("no sucedió");
  }, [props.agregar]);

  const initialValue = [props.content];

  return (
    <>
      <div id="divEditor">
        <Toolbar editor={editor}></Toolbar>
        <Slate editor={editor} initialValue={initialValue}>
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
