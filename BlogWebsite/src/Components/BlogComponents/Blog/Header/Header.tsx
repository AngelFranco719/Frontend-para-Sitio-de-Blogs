import { Header as header } from "../../../../TypesDeclarations/BlogContentTypes";
import "./Header.css";

interface propsHeader {
  actualHeader: header;
}

export const Header = (props: propsHeader) => {
  return (
    <div id="Header">
      <img className="photo" src={props.actualHeader.profilePhoto} />
      <div className="information">
        <div className="Categorie">{props.actualHeader.categorie} </div>
        <div className="title">{props.actualHeader.title}</div>
        <div className="Description">{props.actualHeader.description}</div>
      </div>
    </div>
  );
};
