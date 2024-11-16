import React, { SetStateAction, useState } from "react";
import { HorizontalContainer as horizontalContainer } from "../../../../TypesDeclarations/BlogContentTypes";
import { ReactEditor } from "slate-react";
import { isCustomText, isTarget } from "../BlogTypeGuards";
import { TextEditor } from "../../EditorSlate/Editors/TextEditor";
import { TargetEditor } from "../../EditorSlate/Editors/TargetEditor";
import "../Blog.css";

interface propsHorizontalContainer {
  container: horizontalContainer;
  setEditor: React.Dispatch<SetStateAction<ReactEditor | undefined>>;
  isEditing: boolean;
  setSelectedIndex: React.Dispatch<SetStateAction<string | undefined>>;
}

export const HorizontalContainer = (content: propsHorizontalContainer) => {
  const [selected, setSelected] = useState<boolean>(false);
  const childrens = content.container.children;
  let index = -1;

  const getComponent = (index: number) => {
    const children = childrens[index];
    if (isCustomText(children)) {
      return (
        <TextEditor
          agregar
          content={children}
          readOnly
          setText={undefined}
        ></TextEditor>
      );
    }
    if (isTarget(children)) {
      return (
        <TargetEditor
          key={index}
          setEditorActual={content.setEditor}
          target={children}
        ></TargetEditor>
      );
    }
  };

  const onClickHandle = () => {
    if (content.isEditing && selected) {
      setSelected(false);
      content.setSelectedIndex(undefined);
    } else if (content.isEditing && !selected) {
      setSelected(true);
      content.setSelectedIndex(content.container.ID_Container);
    }
  };

  return (
    <>
      <div
        onClick={() => {
          onClickHandle();
        }}
        style={{
          backgroundColor: content.container.backgroundColor,
          borderWidth: selected ? "2px" : "1px",
          borderColor: selected ? "#2a2a2a" : "#a7a7a7",
        }}
        className="horizontalContainer"
      >
        {childrens.map(() => {
          index++;
          return getComponent(index);
        })}
      </div>
    </>
  );
};
