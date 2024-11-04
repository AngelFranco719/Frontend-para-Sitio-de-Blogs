import "./BlogEditor.css";
import { OptionsToolbar } from "./Options/OptionsToolbar";
import { BlogViewer } from "../../Components/BlogComponents/Blog/Blog";

export const BlogEditor = () => {
  return (
    <div id="EditorViewer">
      <div className="toolsViewer">
        <OptionsToolbar />
      </div>
      <div className="blogViewer">
        <BlogViewer></BlogViewer>
      </div>
    </div>
  );
};
