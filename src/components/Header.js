// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/A propos">A propos</Link></li>
          {/* Ajoutez d'autres liens de navigation ici */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
