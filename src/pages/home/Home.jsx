import "./home.scss";
import RightBox from "../../components/rightBox/RightBox";
import Post from "../../components/post/Post";
export const Home = () => {
  return (
    <div className="container">
      HOME PAGE
      <div className="home-page">
        <div className="home-page-left">
          <div className="posts">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </div>
        <div className="home-page-right">
          <RightBox />
        </div>
      </div>
    </div>
  );
};
