import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from './pages/home.js';
import Profil from './pages/profil.js';

const App = () => {
  return (
    <Router>
      <header className="App-header">
        <img 
          src='https://www.groupe-bizness.com/wp-content/uploads/2023/05/MicrosoftTeams-image-1.png.webp' 
          className="App-logo" 
          alt="logo"
        />
        <div class="menu">
          <Link to="/">Accueil</Link>
          <Link to="/profil">Mes Informations</Link>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
      </Routes>
    </Router>
  );
}

export default App;
