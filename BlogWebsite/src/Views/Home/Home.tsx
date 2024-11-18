import { Categorie } from "../../Components/Global Components/HomeComponents/Categories/Categorie";
import { categories } from "./Utils";
import "./Home.css";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();

  const handleClickCategorie = (categorie: string) => {
    console.log("clicked");
    navigate(`/categories/${categorie}`);
  };

  return (
    <div id="Home">
      <div className="HomeContent">
        <div className="HomeBanners">
          <div className="PrincipalHeader">
            <div className="HeaderTitle">
              <h1>CREA, COMPARTE Y PERSONALIZA</h1>
            </div>
          </div>
          <div className="SecondaryHeader">
            <div className="AHeader" style={{ gridRow: 1 }}>
              <div className="HeaderTitle ">
                <h1 style={{ fontSize: "25px" }}>APRENDE ACERCA DE TODO</h1>
              </div>
            </div>
            <div
              className="AHeader"
              style={{
                gridRow: 2,
                backgroundImage:
                  "url(https://i.pinimg.com/originals/c0/8c/5c/c08c5cffc4cbb2e97609d203d07234c8.gif)",
              }}
            >
              <div className="HeaderTitle ">
                <h1 style={{ fontSize: "25px" }}>ÚNETE A LA COMUNIDAD</h1>
              </div>
            </div>
          </div>
        </div>
        <h2 style={{ color: "#292929", fontSize: "50px", margin: "0" }}>
          Categorías:{" "}
        </h2>
        <div className="HomeCategories">
          {categories.map((element) => {
            return (
              <Categorie
                onClick={() => {
                  handleClickCategorie(element.name);
                }}
                key={element.id}
                {...element}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
