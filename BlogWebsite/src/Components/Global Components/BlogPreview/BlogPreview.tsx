import { useNavigate } from "react-router-dom";
import "./BlogPreview.css";

interface propsBlogPreview {
  banner: string;
  title: string;
  username: string;
  description: string;
}

export const BlogPreview = (props: propsBlogPreview) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(
          `/blog/${encodeURIComponent(props.title)}/${encodeURIComponent(
            props.username
          )}`
        );
      }}
      className="BlogPreview"
    >
      <img src={props.banner}></img>
      <div>
        <label>
          {props.title}
          <span style={{ textDecoration: "none" }}>{props.username}</span>
        </label>

        <p>{props.description}</p>
      </div>
    </div>
  );
};
