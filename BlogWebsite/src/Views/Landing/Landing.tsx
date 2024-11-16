import Typed from "typed.js";
import "./Landing.css";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
export const Landing = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: [
        "<i>Crea</i>",
        "<i>Comparte</i>",
        "<i>Conoce</i>",
        "<i>Aprende</i>",
      ],
      loop: true,
      typeSpeed: 75,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div id="Landing">
      <div id="Landing_Content">
        <div className="Landing_WP" />
        <div className="Landing_Presentation">
          <div className="Landing_Header">
            <Link to={"/signup"}>Registrarse</Link>
            <Link to={"/login"}>Iniciar Sesión</Link>
          </div>
          <div className="Landing_Text">
            <h1>
              ¡
              <span ref={typedElement} className="typed">
                Comparte
              </span>
            </h1>
            <h2>a través de un</h2>
            <h1 style={{ textAlign: "end", color: "#915daf" }}>Blog!</h1>
            <button className="Button_Landing">¡Empieza Ahora!</button>
          </div>
        </div>
      </div>
    </div>
  );
};
