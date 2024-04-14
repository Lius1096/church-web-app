// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import Essaie1 from '../assets/Essaie1.svg'; // Importez votre logo depuis son emplacement

function Header() {
  return (
    <header>
      <nav className="flex items-center justify-between py-4 px-8 bg-gray-800">
        <div className="flex items-center flex-shrink-0 mr-6">
          <img src={Essaie1} alt="Logo" className="h-8 w-8" /> {/* Afficher le logo */}
          <Link to="/" className="ml-2 text-white font-semibold text-xl"></Link>
        </div>
        <ul className="flex items-center">
          <li><Link to="/blog" className="text-white text-lg mx-4">Blog</Link></li>
          <li><Link to="/ministries" className="text-white text-lg mx-4">Ministries</Link></li>
          <li><Link to="/resources" className="text-white text-lg mx-4">Resources</Link></li>
          <li><Link to="/messages" className="text-white text-lg mx-4">Messages</Link></li>
          <li><Link to="/calendar" className="text-white text-lg mx-4">Calendar</Link></li>
          <li><Link to="/contact" className="text-white text-lg mx-4">Contact</Link></li>
          <li><Link to="/about" className="text-white text-lg mx-4">A propos</Link></li>
          {/* Ajoutez d'autres liens de navigation ici */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
