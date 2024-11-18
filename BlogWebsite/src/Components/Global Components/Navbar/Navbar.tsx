import "./Navbar.css";
import "./Icons.css";
import { useProfileContext } from "../../../GlobalVariables/ProfileContext";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const { profile, setProfile } = useProfileContext();
  const navigation = useNavigate();

  const hanldeCreateClick = () => {
    navigation("/createblog");
  };

  const handleLogOutClick = () => {
    setProfile(undefined);
    navigation("/");
    alert("Sesión Cerrada Correctamente.")
  };

  return (
    <div id="Navbar">
      <div className="ProfileNav">
        <img
          src={
            profile
              ? profile.per_foto
              : "https://i.pinimg.com/736x/e8/d7/d0/e8d7d05f392d9c2cf0285ce928fb9f4a.jpg"
          }
        />
        <p>{profile ? profile.per_nombre : "Inicia Sesión"}</p>
      </div>
      <div className="SearchBar">
        <span style={{ gridColumn: 1 }} className="searchIcon"></span>
        <input type="text" placeholder="Busca un Blog..." />
      </div>
      <label
        onClick={() => {
          hanldeCreateClick();
        }}
      >
        <button className="createButton">
          <p className="writeIcon"></p>
          Crear
        </button>
      </label>
      <label
        onClick={() => {
          handleLogOutClick();
        }}
        style={{ justifyItems: "end", width: "100%", marginRight: "50px" }}
      >
        <p>Cerrar Sesión</p>
      </label>
    </div>
  );
};
