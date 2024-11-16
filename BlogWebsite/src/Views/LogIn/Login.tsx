import "./Login.css";

export const LogIn = () => {
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
          <input type="text" placeholder="Nombre de Usuario"></input>
          <p>Ingresa tu Contraseña:</p>
          <input type="password" placeholder="Contraseña"></input>
          <button>Ingresar</button>
        </div>
      </div>
    </div>
  );
};
