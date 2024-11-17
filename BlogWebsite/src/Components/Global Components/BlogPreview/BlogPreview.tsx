import "./BlogPreview.css";

export const BlogPreview = () => {
  return (
    <div className="BlogPreview">
      <img src="https://i.pinimg.com/originals/48/f9/b0/48f9b05200f0b6d1c82574060b277279.gif"></img>
      <div>
        <label>
          Titulo del Blog:
          <span style={{textDecoration:"none"}}>ÁngelFranco719</span>
        </label>

        <p>
          Preview de cómo se debería ver el contenido de la previsualziación del
          blog.
        </p>
      </div>
    </div>
  );
};
