import { useNavigate } from "react-router-dom";
import { useFetch } from "../../APIController/useFetch";
import "./Login.css";
import { useRef } from "react";

export const LogIn = () => {
  const { request } = useFetch<any[]>();
  const navigation = useNavigate();
  const refUsername = useRef<HTMLInputElement>(null);
  const refPassword = useRef<HTMLInputElement>(null);

  const handleLogin = () => {
    const username = refUsername.current?.value;
    const password = refPassword.current?.value;
    if (username && password) {
      const parametros = {
        username: username,
        password: password,
      };
      request("http://localhost:8080/Perfil/login", {
        method: "POST",
        body: JSON.stringify(parametros),
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert("Se encontró la sesión");
      navigation("/Home");
    } else {
      alert("Ingresa todos los campos.");
    }
  };

  return (
    <div id="Login">
      <div id="LoginContent">
        <div
          style={{
            gridColumn: 2,
            backgroundImage:
              "url(https://i.pinimg.com/originals/54/b5/b5/54b5b572a814ce721e1b01adabed5c84.gif)",
          }}
          className="SignWall"
        ></div>
        <div className="LogContent">
          <h1>Iniciar Sesión: </h1>
          <p>Ingresa tu Nombre de Usuario:</p>
          <input
            ref={refUsername}
            type="text"
            placeholder="Nombre de Usuario"
          ></input>
          <p>Ingresa tu Contraseña:</p>
          <input
            ref={refPassword}
            type="password"
            placeholder="Contraseña"
          ></input>
          <button
            onClick={() => {
              handleLogin();
            }}
          >
            Ingresar
          </button>
        </div>
      </div>
    </div>
  );
};
