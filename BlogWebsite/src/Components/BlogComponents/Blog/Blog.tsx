import { BlogStructure } from "../../../TypesDeclarations/BlogContentTypes";
import "./Blog.css";
import { TextEditor } from "../EditorSlate/Editors/TextEditor";
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
import { Toolbar } from "../EditorSlate/Toolbar/Toolbar";
import { Banner } from "./Banner/Banner";
import { Header } from "./Header/Header";
import { LeftImageText } from "../EditorSlate/Editors/LeftImageText/LeftImageText";
interface propsBlog {
  content: BlogStructure;
}

export const BlogViewer = (structure: propsBlog) => {
  const [editorActual, setEditorActual] = useState<ReactEditor>();
  const childrens = structure.content.content;
  let index = -1;
  let color = structure.content.backgroundColor;

  useEffect(() => {
    console.log(JSON.stringify(structure.content, null, 2));
  }, []);

  const getComponent = (index: number) => {
    const child = childrens[index];
    if (isText(child)) {
      return (
        <TextEditor
          key={index}
          setEditorActual={setEditorActual}
          content={child}
        />
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
        <Toolbar editor={editorActual}></Toolbar>
        <div className="content">
          {childrens.map(() => {
            index++;
            return getComponent(index);
          })}
        </div>
      </div>
    </>
  );
};
