import { SetStateAction } from "react";
import { HorizontalContainer as horizontalContainer } from "../../TypesDefinitions";
import { ReactEditor } from "slate-react";
import { isCustomText, isTarget } from "../BlogTypeGuards";
import { TextEditor } from "../../EditorSlate/Editors/TextEditor";
import { TargetEditor } from "../../EditorSlate/Editors/TargetEditor";
import "../Blog.css";

interface propsHorizontalContainer {
  container: horizontalContainer;
  setEditor: React.Dispatch<SetStateAction<ReactEditor | undefined>>;
}

export const HorizontalContainer = (content: propsHorizontalContainer) => {
  const childrens = content.container.children;
  let index = -1;

  const getComponent = (index: number) => {
    const children = childrens[index];
    if (isCustomText(children)) {
      return (
        <TextEditor
          key={index}
          setEditorActual={content.setEditor}
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

  return (
    <>
      <div
        style={{ backgroundColor: content.container.backgroundColor }}
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
