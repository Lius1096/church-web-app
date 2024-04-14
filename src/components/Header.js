// Header.js
//
import React from 'react';
import { Link } from 'react-router-dom';
import Essaie1 from '../assets/Essaie1.svg'; // Importez votre logo depuis son emplacement
import backgroundImage from '../assets/eglise.png'; // Importez votre image de fond


function Header() {
  return (
    <header>
      <nav className="flex items-center justify-between py-4 px-8 bg-gray-800">
        <div className="flex items-center flex-shrink-0 mr-6">
          <img src={Essaie1} alt="Logo" className="h-15 w-12" /> {/* Afficher le logo */}
          <Link to="/" className="ml-2 text-white font-semibold text-xl"></Link>
        </div>
        <ul className="flex items-center">
          <li><Link to="/blog" className="text-white text-lg mx-4">Blog</Link></li>
          <li><Link to="/ministries" className="text-white text-lg mx-4">Ministries</Link></li>
          <li><Link to="/resources" className="text-white text-lg mx-4">Resources</Link></li>
          <li><Link to="/messages" className="text-white text-lg mx-4">Messages</Link></li>
          <li><Link to="/event" className="text-white text-lg mx-4">Events</Link></li>
          <li><Link to="/contact" className="text-white text-lg mx-4">Contact</Link></li>
          <li><Link to="/about" className="text-white text-lg mx-4">A propos</Link></li>
          {/* Ajoutez d'autres liens de navigation ici */}
        </ul>
      </nav>
       {/* Section Culte avec image de fond */}
       <section className="relative h-screen flex items-center justify-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-200 p-8 rounded-lg">
          <p className="text-lg font-bold text-center mb-4">Culte tous les dimanches à 13h</p>
          <p className="text-lg text-center mb-4">95 rue de l'Ouest, Paris 14ème</p>
          <div className="flex justify-center">
            <Link to="/qui-sommes-nous" className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2">Qui Sommes Nous</Link>
            <a href="https://www.facebook.com/votreeglise" className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2" target="_blank" rel="noopener noreferrer">Facebook</a>
            <Link to="/contact" className="bg-blue-500 text-white px-4 py-2 rounded-lg">Contact</Link>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;
