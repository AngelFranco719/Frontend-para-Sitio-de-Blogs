import { createContext, SetStateAction, useContext, useState } from "react";
import { BlogStructure } from "./TypesDeclarations/BlogContentTypes";
import { temporalInitialBlog } from "./Utils";

interface typesBlogContext {
  content: BlogStructure;
  setContent: React.Dispatch<SetStateAction<BlogStructure>>;
}

const initialValue = {
  content: temporalInitialBlog,
  setContent: () => {},
};

export const BlogContext = createContext<typesBlogContext>(initialValue);

export const useBlogContext = () => {
  return useContext(BlogContext);
};

interface propsBlogProvider {
  children: React.ReactNode;
}

export const BlogProvider = ({ children }: propsBlogProvider) => {
  const [content, setContent] = useState<BlogStructure>(temporalInitialBlog);
  return (
    <BlogContext.Provider value={{ content, setContent }}>
      {children}
    </BlogContext.Provider>
  );
};
