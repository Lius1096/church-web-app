import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Logo from '../assets/Essaie1.svg'; // Importez le logo depuis son emplacement

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <img src={Logo} alt="Logo" className="h-8 w-8 mr-2" /> {/* Afficher le logo */}
          <p>© 2024 Église Protestante. Tous droits réservés.</p>
        </div>
        <div>
          <p><a href="#" className="text-white mr-4">Mentions légales</a> <span className="text-gray-400">-</span> <a href="#" className="text-white mx-4">CGU</a> <span className="text-gray-400">-</span> <a href="#" className="text-white ml-4">Politique de confidentialité</a></p>
        </div>
        <div className="flex">
          <a href="https://www.facebook.com/votreeglise" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://twitter.com/votreeglise" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://www.instagram.com/votreeglise" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          {/* Ajoutez d'autres icônes de réseaux sociaux ici */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
