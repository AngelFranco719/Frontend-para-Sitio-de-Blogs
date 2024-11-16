import { useState } from "react";
import "./SingUp.css";

export const SingUp = () => {
  const [image, setImage] = useState<string>(
    "https://i.pinimg.com/736x/ea/6b/d3/ea6bd33f1eb74b8112bc910040ada063.jpg"
  );
  const [url, setURL] = useState<string>("");
  const [inputType, setInputType] = useState<string>("password");

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

  return (
    <div id="SignUp">
      <div id="SignUpContent">
        <div className="SignWall" />
        <div className="SignContent">
          <h1>Regístrate: </h1>
          <p>Nombre de Usuario: </p>
          <input type="text" placeholder="Inserta tu Nombre de Usuario" />
          <div className="insertProfilePhoto">
            <img src={image}></img>
            <div>
              <p>Foto de Perfil:</p>
              <input
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
          <input type={inputType} placeholder="Inserta tu contraseña" />
          <label>
            <input
              onChange={() => {
                handleTypeChanged();
              }}
              type="checkbox"
            />
            Mostrar Contraseña.
          </label>
          <button style={{ alignSelf: "center" }}>Registrarse</button>
        </div>
      </div>
    </div>
  );
};
