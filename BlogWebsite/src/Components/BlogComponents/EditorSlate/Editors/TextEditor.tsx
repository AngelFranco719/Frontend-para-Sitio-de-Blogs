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
  setText: React.Dispatch<SetStateAction<CustomText[]>> | undefined;
  agregar: boolean;
  readOnly: boolean;
}

export const TextEditor = (props: propEditor) => {
  const [editor] = useState(() => withReact(createEditor()));

  useEffect(() => {
    if (props.agregar && isText(editor.children[0])) {
      props.setText && props.setText(editor.children[0].children);
    }
    console.log("no sucedió");
  }, [props.agregar]);

  const initialValue = [props.content];

  return (
    <>
      <div id="divEditor">
        {props.setText && <Toolbar editor={editor}></Toolbar>}
        <Slate editor={editor} initialValue={initialValue}>
          <Editable
            renderElement={(props) => {
              return <TypeBlock editor={editor} renderElement={props} />;
            }}
            renderLeaf={(props) => {
              return <TypeLeaf leafProps={props} editor={editor} />;
            }}
            readOnly={props.readOnly}
          ></Editable>
        </Slate>
      </div>
    </>
  );
};
