import { useEffect, useState } from "react";
import { useFetch } from "../../APIController/useFetch";
import "./BlogView.css";
import { useParams } from "react-router-dom";
import { Blog } from "../../Models/BlogModel";
import { isBlog } from "../../Models/ModelTypeGuards";
import { BlogViewer } from "../../Components/BlogComponents/Blog/Blog";
import { useBlogContext } from "../../GlobalVariables/BlogContext";
import { BlogStructure } from "../../TypesDeclarations/BlogContentTypes";
export const BlogView = () => {
  const { title, profile } = useParams();
  const { request, error, data, loading } = useFetch();
  const { setContent } = useBlogContext();
  const [blog, setBlog] = useState<Blog>();
  const [, setSelectedContainer] = useState<string | undefined>();

  useEffect(() => {
    if (title && profile) {
      request(
        `http://localhost:8080/Blog/${encodeURIComponent(
          title
        )}/${encodeURIComponent(profile)}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
  }, []);

  useEffect(() => {
    if (loading && error) {
      alert("No se encontró el blog.");
    }
  }, [loading]);

  useEffect(() => {
    if (!loading && !error && isBlog(data)) {
      setBlog(data);
    }
  }, [data]);

  useEffect(() => {
    if (blog) {
      const actualContent: BlogStructure = blog.blo_contenido;
      setContent({ ...actualContent, content: actualContent.content });
    }
  }, [blog]);

  return (
    <div id="BlogView">
      <BlogViewer
        isEditing={false}
        setSelectedIndex={setSelectedContainer}
      ></BlogViewer>
    </div>
  );
};
