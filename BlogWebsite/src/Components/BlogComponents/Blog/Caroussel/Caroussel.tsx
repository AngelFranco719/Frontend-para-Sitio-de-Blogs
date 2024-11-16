import "./Caroussel.css";
import { Caroussel as caroussel } from "../../../../TypesDeclarations/BlogContentTypes";
interface propsCaroussel {
  images: caroussel;
}

export const Caroussel = (content: propsCaroussel) => {
  const images = content.images.children;
  return (
    <div className="slider">
      <div className="slider-track">
        {images.map((element, key) => {
          return (
            <div key={`first-${key}`} className="slide">
              <img src={element} />
            </div>
          );
        })}
        {images.map((element, key) => {
          return (
            <div key={`second-${key}`} className="slide">
              <img src={element} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
