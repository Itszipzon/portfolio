import "./css/Home.css";
import HomeLeft from "../elements/home-left";
import HomeRight from "../elements/home-right";

export default function Home() {
  return (
    <div className="home-container">
      <HomeLeft />
      <HomeRight />
    </div>
  );
}