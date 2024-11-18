import { useParams } from "react-router-dom";
import { BlogPreview } from "../../Components/Global Components/BlogPreview/BlogPreview";
import "./FilterByCategorie.css";
import { useEffect, useState } from "react";
import { categories } from "../Home/Utils";
import { useFetch } from "../../APIController/useFetch";
import { Blog } from "../../Models/BlogModel";
import { isBlog } from "../../Models/ModelTypeGuards";
import {
  isBanner,
  isHeader,
} from "../../Components/BlogComponents/Blog/BlogTypeGuards";

type categories = {
  name: "VIDEOJUEGOS" | "TECNOLOGÍA" | "MÚSICA" | "PERSONAL";
};

export const FilterByCategorie = () => {
  const { categorie } = useParams();
  const [IsCategorie, setIsCategorie] = useState<Boolean>();
  const { request, data } = useFetch();
  const [listBlog, setListBlog] = useState<Blog[]>([]);
  const [banners, setBanners] = useState<string[]>([]);
  const [descs, setDescs] = useState<string[]>([]);
  const [usernames, setUsernames] = useState<string[]>([]);

  /// Comprobar si es una Categoría
  function isCategorie(obj: any): obj is categories {
    return (
      obj &&
      (obj === "VIDEOJUEGOS" ||
        obj === "TECNOLOGÍA" ||
        obj === "MÚSICA" ||
        obj === "PERSONAL")
    );
  }

  /// Obtener los Banners
  const getBanner = () => {
    if (listBlog) {
      const getBanners: string[] = [];
      listBlog.forEach((element) => {
        getBanners.push(
          element.blo_contenido.content.filter(isBanner)[0].children
        );
      });
      setBanners(getBanners);
    }
  };

  /// Obtener Descripciones
  const getDescription = () => {
    if (listBlog) {
      const getDesc: string[] = [];
      listBlog.forEach((element) => {
        getDesc.push(
          element.blo_contenido.content.filter(isHeader)[0].description
        );
      });
      setDescs(getDesc);
    }
  };

  /// Verificar si la Categoría existe.
  useEffect(() => {
    if (isCategorie(categorie) && categorie) {
      setIsCategorie(true);
      getBlogList();
    } else if (!isCategorie(categorie)) {
      setIsCategorie(false);
    }
  }, [categorie]);

  /// Obtener los Blogs.
  useEffect(() => {
    if (data && listBlog.length == 0) {
      const blogs: Blog[] = Array.isArray(data) ? data.filter(isBlog) : [];
      setListBlog(blogs);
    } else if (data) {
      const username: string = typeof data === "string" ? data : "";
      const currentUsernames = usernames;
      username != "" && currentUsernames.push(username);
      setUsernames(currentUsernames);
    }
  }, [data]);

  useEffect(() => {
    if (listBlog.length > 0) {
      getBanner();
      getDescription();
    }
  }, [listBlog]);

  const getBlogList = () => {
    request(`http://localhost:8080/Blog/filter/${categorie}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return IsCategorie ? (
    <div id="FilterByCategorie">
      <div id="CatBanner" />
      <h1 id="FilterTitle">{categorie}</h1>
      <div className="filterContent">
        <h2>Blogs Encontrados: </h2>
        <p>
          Se encontraron <span>{listBlog.length} </span>resultados.
        </p>
        {listBlog.map((element, key) => {
          return (
            <BlogPreview
              key={key}
              title={element.blo_titulo}
              banner={banners[key]}
              description={descs[key]}
              username={"" + element.id_Perfil.per_nombre}
            ></BlogPreview>
          );
        })}
      </div>
    </div>
  ) : (
    <div id="FilterByCategorie">
      <h1 style={{ color: "black", marginTop: "5ch" }}>404 NOT FOUND</h1>
    </div>
  );
};
