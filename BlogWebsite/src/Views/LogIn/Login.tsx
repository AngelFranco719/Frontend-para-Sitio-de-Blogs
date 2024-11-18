import { useNavigate } from "react-router-dom";
import { useFetch } from "../../APIController/useFetch";
import "./Login.css";
import { useEffect, useRef, useState } from "react";
import { useProfileContext } from "../../GlobalVariables/ProfileContext";
import { Perfil } from "../../Models/PerfilModel";
import { isPerfil } from "../../Models/ModelTypeGuards";

export const LogIn = () => {
  const { data, request, error, loading } = useFetch<any[]>();
  const { profile, setProfile } = useProfileContext();
  const [newSession, setNewSession] = useState<Perfil | undefined>(undefined);
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
    } else {
      alert("Ingresa todos los campos.");
    }
  };

  useEffect(() => {
    if (error && !loading) {
      alert("No se encontró el Usuario: " + error);
      navigation("/login");
    }
    if (!error && !loading) {
      alert("Inicio de Sesión Exitoso.");
      isPerfil(data) ? setNewSession(data) : setNewSession(undefined);
    }
  }, [loading]);

  useEffect(() => {
    if (newSession) {
      setProfile(newSession);
    }
  }, [newSession]);

  useEffect(() => {
    if (profile) {
      navigation("/home");
    }
  }, [profile]);

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
