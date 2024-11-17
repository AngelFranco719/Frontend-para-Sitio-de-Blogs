import { useRef, useState } from "react";
import "./CreateBlog.css";
import { useNavigate } from "react-router-dom";
import { useBlogContext } from "../../GlobalVariables/BlogContext";
import { BlogStructure } from "../../TypesDeclarations/BlogContentTypes";

export const CreateBlog = () => {
  const [url, setURL] = useState<string>(
    "https://i.pinimg.com/originals/08/e1/15/08e11579d83c4d109ccc82c3ca6428ac.gif"
  );

  const [image, setImage] = useState<string>(
    "https://i.pinimg.com/originals/08/e1/15/08e11579d83c4d109ccc82c3ca6428ac.gif"
  );

  const inputURL = useRef<HTMLInputElement>(null);
  const inputDesc = useRef<HTMLTextAreaElement>(null);
  const inputTitle = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const { setContent } = useBlogContext();

  const handleURLChange = () => {
    const newURL = inputURL.current?.value;
    if (newURL) {
      setURL(newURL);
    }
  };

  const handleSearch = () => {
    setImage(url);
  };

  const handleCreate = () => {
    const descripcion = inputDesc.current?.value;
    const titulo = inputTitle.current?.value;

    if (descripcion && titulo) {
      const newBlog: BlogStructure = {
        type: "Blog",
        backgroundColor: "#9300b8",
        content: [
          {
            type: "Banner",
            children: image,
          },
          {
            type: "Header",
            profile: "Angel Franco",
            categorie: "Videojuegos",
            date: "03/11/2024",
            description: descripcion,
            profilePhoto:
              "https://media.istockphoto.com/id/1388253782/es/foto/positivo-exitoso-hombre-de-negocios-profesional-de-negocios-del-milenio-retrato-de-la-cabeza.jpg?s=612x612&w=0&k=20&c=gDMgYu50FUOTQhCZwYM6deYTzHvKkKAK9e945a21hZ8=",
            title: titulo,
          },
        ],
      };

      setContent(newBlog);
      navigate("/blogeditor");
    }
  };

  return (
    <div id="CreateBlog">
      <div className="createContent">
        <div className="createForms">
          <img src={image}></img>
          <div>
            <h2>¡Crea un Blog!</h2>
            <p>Inserta un Título: </p>
            <input
              ref={inputTitle}
              type="text"
              placeholder="Titulo del Blog..."
            ></input>
            <p>Inserta un Banner: </p>
            <input
              ref={inputURL}
              onChange={() => {
                handleURLChange();
              }}
              style={{ color: "#1045e0", textDecoration: "underline" }}
              type="text"
              placeholder="Link del Banner (Portada del Blog)..."
            />
            <button onClick={() => handleSearch()}>Buscar</button>
            <p>Inserta una Descripción: </p>
            <textarea
              ref={inputDesc}
              placeholder="Inserta una breve descripción (Esta aparecerá en el encabezado de tu blog y en la previsualización"
            ></textarea>
            <button
              onClick={() => {
                handleCreate();
              }}
            >
              Empezar a Editar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
