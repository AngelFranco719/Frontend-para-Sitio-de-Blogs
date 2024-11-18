import "./Categorie.css";

interface propsCategorie {
  name: string;
  description: string;
  image: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

export const Categorie = (props: propsCategorie) => {
  return (
    <div onClick={props.onClick} className="CategorieH">
      <img src={props.image} />
      <h2>{props.name}</h2>
      <p>{props.description}</p>
    </div>
  );
};
