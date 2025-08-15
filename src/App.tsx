import './App.css';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <div className="content">
        <div />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
