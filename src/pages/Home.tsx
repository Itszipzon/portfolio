import "./css/Home.css";
import { Link } from "react-router";
import githubLogo from "../assets/logos/github.svg";
import linkedInLogo from "../assets/logos/linkedin.png";

export default function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to the Home Page</h1>
      <p>This is the main page of our application.</p>
      <div className="home-social-links">
        <Link to="https://github.com/Itszipzon" target="_blank" rel="noopener noreferrer" ><img src={githubLogo} alt="GitHub Logo" className="github-logo" /></Link>
        <Link to="https://www.linkedin.com/in/rune-molander-a943a0263/" target="_blank" rel="noopener noreferrer"><img src={linkedInLogo} alt="LinkedIn Logo" className="linkedin-logo" /></Link>
      </div>
    </div>
  );
}