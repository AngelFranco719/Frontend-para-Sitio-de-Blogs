import { useEffect, useState } from "react";
import { useFetch } from "./APIController/useFetch";
import "./App.css";
import { Blog } from "./Models/BlogModel";
import { isBlog } from "./Models/ModelTypeGuards";
import { BlogViewer } from "./Components/BlogComponents/Blog/Blog";
import { isBlogStructure } from "./Components/BlogComponents/Blog/BlogTypeGuards";
import { BlogStructure } from "./TypesDeclarations/BlogContentTypes";

function App() {
  const { data } = useFetch<Blog[]>(new URL("http://localhost:8080/Blog"));

  const [blog, setBlog] = useState<Blog[]>([]);
  const [blogContenido, setBlogContenido] = useState<BlogStructure>();

  useEffect(() => {
    console.log(data);
    if (data && data.length > 0) {
      const validBlogs = data.filter(isBlog);
      setBlog(validBlogs);
    }
  }, [data]);

  useEffect(() => {
    blog.forEach((element) => {
      if (isBlogStructure(element.blo_contenido)) {
        console.log(element);
        setBlogContenido(element.blo_contenido);
      }
    });
  }, [blog]);

  return (
    <>
      {blog.length > 0 ? (
        blog.map((element) => {
          return (
            <BlogViewer key={element.id_Blog} content={element.blo_contenido} />
          );
        })
      ) : (
        <div>No hay Blogs</div>
      )}
    </>
  );
}

export default App;
