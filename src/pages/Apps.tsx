import AppContainer from "../assets/elements/AppContainer";
import "./css/Apps.css";
import { Link } from "react-router";

export default function Apps() {
  return (
    <div className="apps">
      <h1>Apps</h1>
      <ul>
        <li><AppContainer title="Locked In" img="https://shelstad.store/data/tool2.png" /></li>
        <li><Link to="/app2">App 2</Link></li>
        <li><Link to="/app3">App 3</Link></li>
      </ul>
    </div>
  );
}