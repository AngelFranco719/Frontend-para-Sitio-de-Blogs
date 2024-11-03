import "./Banner.css";

interface propsBanner {
  imageURL: string;
}
export const Banner = (props: propsBanner) => {
  return (
    <div id="Banner">
      <img id="BannerImage" src={props.imageURL}></img>
    </div>
  );
};
