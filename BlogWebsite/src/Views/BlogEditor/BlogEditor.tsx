import "./BlogEditor.css";
import { OptionsToolbar } from "./Options/OptionsToolbar";
import { BlogViewer } from "../../Components/BlogComponents/Blog/Blog";
import { useEffect, useState } from "react";

export const BlogEditor = () => {
  const [selectedContainer, setSelectedContainer] = useState<
    string | undefined
  >();

  useEffect(() => {
    selectedContainer &&
      console.log("Container Seleccionado: " + selectedContainer);
  }, [selectedContainer]);

  return (
    <div id="EditorViewer">
      <div className="toolsViewer">
        <OptionsToolbar selectedContainer={selectedContainer} />
      </div>
      <div className="blogViewer">
        <BlogViewer
          isEditing={true}
          setSelectedIndex={setSelectedContainer}
        ></BlogViewer>
      </div>
    </div>
  );
};
