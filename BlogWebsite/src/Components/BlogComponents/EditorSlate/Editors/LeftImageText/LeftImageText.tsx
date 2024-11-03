import { Editable, ReactEditor, Slate, withReact } from "slate-react";
import { LeftImageText as leftImageText } from "../../../TypesDefinitions";
import "./LeftImageText.css";
import React, { SetStateAction, useState } from "react";
import { createEditor } from "slate";
import { TypeBlock } from "../../TypeBlock";
import { TypeLeaf } from "../../TypeLeaf";

interface propsLeftImageText {
  editor: React.Dispatch<SetStateAction<ReactEditor | undefined>>;
  content: leftImageText;
}

export const LeftImageText = (props: propsLeftImageText) => {
  const [editor] = useState(() => withReact(createEditor()));
  const initialValue: leftImageText[] = [props.content];

  return (
    <div id="LeftImageText">
      <div className="LeftContent">
        <img className="LeftImage" src={props.content.image}></img>
        <div className="LeftInformation">
          <h1 style={{ textAlign: "end", width: "100%", fontSize: "40px" }}>
            {props.content.title}
          </h1>
          <div className="separatorLeft"></div>
          <div className="LeftEditor">
            <Slate
              editor={editor}
              initialValue={initialValue}
              onChange={() => props.editor(editor)}
            >
              <Editable
                renderElement={(props) => {
                  return <TypeBlock editor={editor} renderElement={props} />;
                }}
                renderLeaf={(props) => {
                  return <TypeLeaf editor={editor} leafProps={props} />;
                }}
              ></Editable>
            </Slate>
          </div>
        </div>
      </div>
    </div>
  );
};
