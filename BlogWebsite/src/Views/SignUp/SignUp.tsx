import { useRef, useState } from "react";
import "./SingUp.css";
import { useFetch } from "../../APIController/useFetch";
import { Perfil } from "../../Models/PerfilModel";
import { useNavigate } from "react-router-dom";

export const SingUp = () => {
  const [image, setImage] = useState<string>(
    "https://i.pinimg.com/736x/ea/6b/d3/ea6bd33f1eb74b8112bc910040ada063.jpg"
  );
  const [url, setURL] = useState<string>("");
  const { request } = useFetch<any[]>();
  const [inputType, setInputType] = useState<string>("password");
  const navigate = useNavigate();
  const refUsername = useRef<HTMLInputElement>(null);
  const refPhoto = useRef<HTMLInputElement>(null);
  const refPassword = useRef<HTMLInputElement>(null);

  const handleURLImage = (input: React.ChangeEvent<HTMLInputElement>) => {
    const newURL = input.target.value;
    setURL(newURL);
  };

  const handleSearchImage = () => {
    setImage(url);
  };

  const handleTypeChanged = () => {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };

  const postProfile = () => {
    const username = refUsername.current?.value;
    const photo = refPhoto.current?.value;
    const password = refPassword.current?.value;
    const date = new Date();
    const valideDate = date.toISOString();
    if (username && photo && password) {
      const newProfile: Perfil = {
        id_Perfil: undefined,
        per_nombre: username,
        per_foto: photo,
        per_contraseña: password,
        per_descripcion: "",
        per_fecha: valideDate,
        per_portada:
          "https://i.pinimg.com/originals/bf/cf/48/bfcf48d206e2d19c27705b476a8bfa04.gif",
      };

      request(
        "https://backend-para-sitio-de-blogs-production.up.railway.app/Perfil",
        {
          body: JSON.stringify(newProfile),
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
        }
      );
      navigate("/");
      alert("Se guardó el perfil con exito.");
    } else {
      alert("Llena todos los Campos.");
    }
  };

  return (
    <div id="SignUp">
      <div id="SignUpContent">
        <div className="SignWall" />
        <div className="SignContent">
          <h1>Regístrate: </h1>
          <p>Nombre de Usuario: </p>
          <input
            ref={refUsername}
            type="text"
            placeholder="Inserta tu Nombre de Usuario"
          />
          <div className="insertProfilePhoto">
            <img src={image}></img>
            <div>
              <p>Foto de Perfil:</p>
              <input
                ref={refPhoto}
                onChange={(element) => handleURLImage(element)}
                style={{ color: "#1b54cf", textDecoration: "underline" }}
                type="text"
                placeholder="Inserta el Link de la Imágen"
              />
              <button
                onClick={() => {
                  handleSearchImage();
                }}
              >
                Buscar
              </button>
            </div>
          </div>
          <p>Contraseña:</p>
          <input
            ref={refPassword}
            type={inputType}
            placeholder="Inserta tu contraseña"
          />
          <label>
            <input
              onChange={() => {
                handleTypeChanged();
              }}
              type="checkbox"
            />
            Mostrar Contraseña.
          </label>
          <button
            onClick={() => {
              postProfile();
            }}
            style={{ alignSelf: "center" }}
          >
            Registrarse
          </button>
        </div>
      </div>
    </div>
  );
};
