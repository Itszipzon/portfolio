import './App.css';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import Header from './Header';
import { useContext, useEffect, useRef, useState } from 'react';
import Apps from './pages/Apps';
import AboutMe from './pages/AboutMe';
import { themes, Theme, ThemeContext } from './ThemeContext';
import Cookies from 'js-cookie';

function App() {
  const binaryContainerRef = useRef<HTMLDivElement>(null);
  const {theme, setTheme } = useContext(ThemeContext);
  const [themeSelector, setThemeSelector] = useState(false);
  const [displayWarning, setDisplayWarning] = useState(true);

  useEffect(() => {
    if (theme === "matrix") {
      const numLines = 30;

      const createBinaryLine = () => {
        const binary = document.createElement('div');
        binary.className = 'binary';
        binary.style.left = Math.random() * 100 + 'vw';
        binary.style.animationDuration = 5 + Math.random() * 3 + 's';
        binary.style.fontSize = 14 + Math.random() * 6 + 'px';

        const length = Math.floor(Math.random() * 20 + 10);
        let chars = Array.from({ length }, () => (Math.random() < 0.5 ? '0' : '1'));

        binary.innerHTML = chars.join('<br/>');
        if (binaryContainerRef.current) {
          binaryContainerRef.current.appendChild(binary);
        }

        const charInterval = setInterval(() => {
          chars = chars.map(c => (Math.random() < 0.05 ? (c === '0' ? '1' : '0') : c));
          binary.innerHTML = chars.join('<br/>');
        }, 100);

        setTimeout(() => {
          binary.remove();
          clearInterval(charInterval);
        }, 6000);
      };

      const spawnInterval = setInterval(() => {
        for (let i = 0; i < numLines / 4; i++) {
          createBinaryLine();
        }
      }, 250);

      return () => clearInterval(spawnInterval);
    }
  }, [theme]);

  useEffect(() => {
    const savedTheme = Cookies.get('theme') as Theme | undefined;

    if (savedTheme && themes.includes(savedTheme as Theme)) {
      setTheme(savedTheme as Theme);
    } else {
      setTheme('dark');
    }
  }, [theme, setTheme]);

  return (
    <div className="App">
      <div className="dev-warning-banner" style={{ display: displayWarning ? 'block' : 'none' }}>
        <button className="close-banner" onClick={() => setDisplayWarning(false)}>✖️</button>
        🚧 This website is under development. Content is placeholder only and not official. 🚧
      </div>
      <button className={`theme-selector ${theme}`} onClick={() => setThemeSelector(!themeSelector)}>
        {theme === 'matrix' && 
        <div className='matrix'>
          <div>10001</div>
          <div>01010</div>
          <div>11011</div>
        </div>}
        {theme === 'dark' && <span>🌙</span>}
        {theme === 'light' && <span>☀️</span>}
      </button>
      <div className={`theme-selector-container ${themeSelector ? 'active': ''}`}>
        {themes.map((t) => (
          <button onClick={() => setTheme(t)} key={t} className={`theme-button ${t} ${theme === t ? 'active' : ''}`}>
            {`${t === 'dark' ? '🌙' : t === 'light' ? '☀️' : ''}`}
            {t === 'matrix' &&
            <div className='matrix'>
              <div>10001</div>
              <div>01010</div>
              <div>11011</div>
            </div>}
          </button>
        ))}
      </div>
      {theme === "matrix" && <div className="binary-container" ref={binaryContainerRef}></div>}
      <div className="content">
        <div />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
        <Header />
      </div>
    </div>
  );
}

export default App;
