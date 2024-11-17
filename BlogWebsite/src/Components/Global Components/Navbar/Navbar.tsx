import "./Navbar.css";
import "./Icons.css";

export const Navbar = () => {
  return (
    <div id="Navbar">
      <div className="ProfileNav">
        <img src="https://i.pinimg.com/236x/12/fa/4a/12fa4aa71964b289888168ea8543a776.jpg" />
        <p>Ángel_Franco719</p>
      </div>
      <div className="SearchBar">
        <span style={{ gridColumn: 1 }} className="searchIcon"></span>
        <input type="text" placeholder="Busca un Blog..." />
      </div>
      <label>
        <button className="createButton">
          <p className="writeIcon"></p>
          Crear
        </button>
      </label>
      <label
        style={{ justifyItems: "end", width: "100%", marginRight: "50px" }}
      >
        <p>Cerrar Sesión</p>
      </label>
    </div>
  );
};
