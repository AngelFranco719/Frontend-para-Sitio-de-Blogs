import { useState } from "react";
import "../Properties.css";
import { Caroussel } from "../../../../../TypesDeclarations/BlogContentTypes";
import { useBlogContext } from "../../../../../GlobalVariables/BlogContext";

export const CarousselProperties = () => {
  const [search, setSearch] = useState<boolean>(false);
  const [url, setURL] = useState<string>("");
  const [images, setImages] = useState<string[]>([]);
  const { content, setContent } = useBlogContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newURL = event.target.value;
    setURL(newURL);
  };

  const handleClickAddImage = () => {
    const actualImages = images;
    actualImages.push(url);
    setImages(actualImages);
    setSearch(false);
  };

  const handleClickAddComponent = () => {
    const actualContent = content.content;
    const newCaroussel: Caroussel = {
      type: "Caroussel",
      children: images,
    };
    actualContent.push(newCaroussel);
    setContent({ ...content, content: actualContent });
  };

  return (
    <div style={{ marginBottom: "20px" }} className="divProperties">
      <p>Agregar Imágenes: </p>
      <div className="insertImage">
        <input
          onChange={(event) => {
            handleChange(event);
          }}
          type="text"
          placeholder="Inserta un URL válido..."
        ></input>
        <button onClick={() => setSearch(true)}>Buscar</button>
      </div>
      {search && (
        <div className="imagePreview">
          <img src={url}></img>
        </div>
      )}
      {search && (
        <button
          onClick={() => {
            handleClickAddImage();
          }}
        >
          Agregar
        </button>
      )}
      {images.length > 0 && (
        <div className="carousselPreview">
          {images.map((element, index) => {
            return <img src={element} key={index}></img>;
          })}
        </div>
      )}
      {images.length > 3 ? (
        <button
          onClick={() => {
            handleClickAddComponent();
          }}
          style={{ marginTop: "10px" }}
        >
          Agregar Carrusel
        </button>
      ) : (
        <p style={{ color: "#767676" }}>Inserta al menos 4 imágenes.</p>
      )}
    </div>
  );
};
