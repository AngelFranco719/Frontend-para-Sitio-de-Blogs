import "./Blog.css";
import { ReactEditor } from "slate-react";
import { useEffect, useState } from "react";
import { TargetEditor } from "../EditorSlate/Editors/TargetEditor";
import {
  isBanner,
  isCaroussel,
  isHeader,
  isHorizontalContainer,
  isLeftImageText,
  isTarget,
  isText,
} from "./BlogTypeGuards";
import { HorizontalContainer } from "./Containers/HorizontalContainer";
import { Caroussel } from "./Caroussel/Caroussel";
import { Banner } from "./Banner/Banner";
import { Header } from "./Header/Header";
import { LeftImageText } from "../EditorSlate/Editors/LeftImageText/LeftImageText";
import { useBlogContext } from "../../../BlogContext";
import { TextEditor } from "../EditorSlate/Editors/TextEditor";

export const BlogViewer = () => {
  const [, setEditorActual] = useState<ReactEditor>();
  const { content } = useBlogContext();
  const childrens = content.content;
  let index = -1;
  let color = content.content && content.backgroundColor;

  useEffect(() => {
    console.log("Cambió en blog");
    console.log(JSON.stringify(content, null, 2));
  }, [content]);

  const getComponent = (index: number) => {
    const child = childrens && childrens[index];
    if (isText(child)) {
      return (
        <TextEditor
          agregar
          content={child}
          setText={undefined}
          key={index}
          readOnly
        ></TextEditor>
      );
    }
    if (isTarget(child)) {
      return (
        <TargetEditor
          key={index}
          setEditorActual={setEditorActual}
          target={child}
        ></TargetEditor>
      );
    }
    if (isHorizontalContainer(child)) {
      return (
        <HorizontalContainer
          key={index}
          container={child}
          setEditor={setEditorActual}
        />
      );
    }
    if (isCaroussel(child)) {
      return <Caroussel key={index} images={child} />;
    }
    if (isBanner(child)) {
      return <Banner key={index} imageURL={child.children} />;
    }
    if (isHeader(child)) {
      return <Header key={index} actualHeader={child} />;
    }
    if (isLeftImageText(child)) {
      return (
        <LeftImageText key={index} editor={setEditorActual} content={child} />
      );
    } else {
      return <></>;
    }
  };

  return (
    <>
      <div style={{ backgroundColor: color }} id="divBlog">
        <div className="content">
          {childrens &&
            childrens.map(() => {
              index++;
              return getComponent(index);
            })}
        </div>
      </div>
    </>
  );
};
