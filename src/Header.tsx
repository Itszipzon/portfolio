import { Link, useLocation } from "react-router";
import { useEffect, useRef, useState } from "react";
import "./Header.css";

export default function Header() {
  const location = useLocation();
  const navRef = useRef<HTMLUListElement>(null);
  const [highlightStyle, setHighlightStyle] = useState({});

  useEffect(() => {
    const activeLink = navRef.current && navRef.current.querySelector
      ? navRef.current.querySelector(".header-link.active")
      : null;
    if (activeLink) {
      const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = activeLink as HTMLElement;
      setHighlightStyle({
        left: offsetLeft,
        top: offsetTop,
        width: offsetWidth,
        height: offsetHeight,
      });
    }
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;

  return (
    <header>
      <nav>
        <ul ref={navRef}>
          <div className="active-highlight" style={highlightStyle}></div>
          <li>
            <Link className={`header-link ${isActive("/") ? "active" : ""}`} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={`header-link ${isActive("/apps") ? "active" : ""}`} to="/apps">
              Apps
            </Link>
          </li>
          <li>
            <Link className={`header-link ${isActive("/about") ? "active" : ""}`} to="/about">
              About Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
