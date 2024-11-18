import { useEffect, useState } from "react";
import { useFetch } from "../../../APIController/useFetch";
import { useBlogContext } from "../../../GlobalVariables/BlogContext";
import { useProfileContext } from "../../../GlobalVariables/ProfileContext";
import "./ComponentOptions.css";
import "./Icons.css";
import { Option } from "./Option";
import { Header } from "../../../TypesDeclarations/BlogContentTypes";
import { Blog } from "../../../Models/BlogModel";
import { isHeader } from "../../../Components/BlogComponents/Blog/BlogTypeGuards";
import { useNavigate } from "react-router-dom";

interface propsOptions {
  selectedContainer: string | undefined;
}

export const OptionsToolbar = (props: propsOptions) => {
  const { content } = useBlogContext();
  const { profile } = useProfileContext();
  const [blog, setBlog] = useState<Blog>();
  const { request, loading, error } = useFetch();
  const navigation = useNavigate();

  const handleClickShare = () => {
    let header: Header | undefined = content.content.find(isHeader);
    const date = new Date();
    const valideDate = date.toISOString();
    if (content && profile && header) {
      const newBlog: Blog = {
        id_Blog: undefined,
        blo_titulo: header.title,
        blo_categoria: header.categorie,
        blo_fecha: valideDate,
        blo_contenido: content,
        id_Perfil: profile,
      };
      setBlog(newBlog);

      console.log(JSON.stringify(newBlog));
      const ProfileID = profile.id_Perfil;
      request(`http://localhost:8080/Blog/${ProfileID}`, {
        method: "POST",
        body: JSON.stringify(newBlog),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  };

  useEffect(() => {
    if (!loading && !error && blog) {
      alert("Se ha publicado el blog.");
      navigation(
        `/blog/${encodeURIComponent(blog.blo_titulo)}/${encodeURIComponent(
          blog.id_Perfil.per_nombre
        )}`
      );
    } else if (loading && error) {
      alert("Error al publicar: " + error);
    }
  }, [loading]);

  const options = [
    {
      id: 1,
      type: "CustomText",
      name: "Agregar Texto",
      style: "TextIcon",
    },
    {
      id: 2,
      type: "TargetElement",
      name: "Agregar Tarjeta",
      style: "TargetIcon",
    },
    {
      id: 3,
      type: "Caroussel",
      name: "Agregar Carrusel",
      style: "CarousselIcon",
    },
    {
      id: 4,
      type: "LeftImageText",
      name: "Sección Imágen/Texto",
      style: "LeftTextImageIcon",
    },
    {
      id: 5,
      type: "HorizontalContainer",
      name: "Agregar Contenedor Horizontal",
      style: "HorizontalContainerIcon",
    },
  ];

  return (
    <>
      <div className="optionToolbar">
        <div id="HeaderOptions">
          <p>Barra de Herramientas</p>
        </div>
        {options.map((option) => {
          return (
            <Option
              key={option.id}
              id={option.id}
              name={option.name}
              style={option.style}
              type={option.type}
              selectedContainer={props.selectedContainer}
            />
          );
        })}
        <button
          onClick={() => {
            handleClickShare();
          }}
          style={{
            height: "5ch",
            width: "50%",
            marginTop: "20px",
          }}
        >
          Publicar Blog
        </button>
      </div>
    </>
  );
};
