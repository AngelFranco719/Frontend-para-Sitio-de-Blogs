import { BlogPreview } from "../../Components/Global Components/BlogPreview/BlogPreview";
import "./FilterByCategorie.css";

interface propsFilterCategorie {
  categorie: string;
}

export const FilterByCategorie = () => {
  return (
    <div id="FilterByCategorie">
      <div id="CatBanner" />
      <h1 id="FilterTitle">Tecnología</h1>
      <div className="filterContent">
        <h2>Blogs Encontrados: </h2>
        <p>Se encontraron <span>10 </span>resultados.</p>
        <BlogPreview></BlogPreview>
      </div>
    </div>
  );
};
