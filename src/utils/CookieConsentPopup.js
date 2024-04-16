import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCookie, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faMars } from '@fortawesome/free-solid-svg-icons';

function CookieConsentPopup({ onConsent, onRefuse }) {
  const [showPopup, setShowPopup] = useState(false);
  const [acceptedCookies, setAcceptedCookies] = useState({
    performance: false,
    ciblage: false,
    fonctionnalite: false,
  });
  const [showDetails, setShowDetails] = useState(false);
  const [showCookiesMenu, setShowCookiesMenu] = useState(false);

  const handleConsent = () => {
    onConsent(acceptedCookies);
    setShowPopup(false);
  };

  const handleRefuse = () => {
    onRefuse();
    setShowPopup(false);
  };

  const handleToggleCookie = (cookie) => {
    setAcceptedCookies((prevCookies) => ({
      ...prevCookies,
      [cookie]: !prevCookies[cookie],
    }));
  };

  const handleSaveSelection = () => {
    onConsent(acceptedCookies);
    setShowPopup(false);
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
    if (!showDetails) {
      setShowPopup(false);
    }
  };

  const toggleCookiesMenu = () => {
    setShowCookiesMenu(!showCookiesMenu);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      {/* Afficher l'icône de cookie en dehors du popup */}
      <button onClick={togglePopup} className="fixed bottom-7 right-4 z-50 flex items-center justify-center  w-12 h-12 bg-gray-800 text-white rounded-full">
        <FontAwesomeIcon icon={faCookie} className="text-2xl" />
      </button>

      {/* Afficher le popup s'il est ouvert */}
      {showPopup && (
        <div className="fixed bottom-16 right-10 z-50 bg-gray-800 text-white p-8 rounded-lg w-84">
          <button onClick={togglePopup} className="absolute top-4 right-4 text-white">
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <p className="mb-4">
            Ce site Web utilise des cookies pour améliorer l'expérience utilisateur. En utilisant notre site Web, vous acceptez tous les cookies conformément à notre Politique relative aux cookies. 
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center">
              <input type="checkbox" id="performance" checked={acceptedCookies.performance} onChange={() => handleToggleCookie('performance')} />
              <label htmlFor="performance">Performance</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="ciblage" checked={acceptedCookies.ciblage} onChange={() => handleToggleCookie('ciblage')} />
              <label htmlFor="ciblage">Ciblage</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="fonctionnalite" checked={acceptedCookies.fonctionnalite} onChange={() => handleToggleCookie('fonctionnalite')} />
              <label htmlFor="fonctionnalite">Fonctionnalité</label>
            </div>
            <div className="flex justify-between">
              <button onClick={handleConsent} className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Accepter tout</button>
              <button onClick={handleRefuse} className="bg-red-500 text-white px-4 py-2 rounded-md mr-2">Refuser tout</button>
              <button onClick={handleSaveSelection} className="bg-gray-500 text-white px-4 py-2 rounded-md">Enregistrer la sélection</button>
            </div>
            <div className="mt-4 text-center">
              <button onClick={toggleDetails}>{showDetails ? 'Masquer les détails' : 'Afficher les détails'}</button>
            </div>
            {/* Signature */}
            <div className="mt-4 text-center">
              <FontAwesomeIcon icon={faMars} className="text-2xl mr-2" />
              <span>KeTaVerse</span>
            </div>
          </div>
        </div>
      )}

      {/* Popup des détails des cookies */}
      {showDetails && (
        <div className="fixed bottom-4 right-4 z-50 bg-gray-800 text-white p-20 rounded-lg">
          <button onClick={toggleDetails} className="absolute top-4 right-4 text-white">
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <p>DÉCLARATION RELATIVE AUX COOKIES</p>
          <p>Performance</p>
          <p>Les cookies de performance sont utilisés pour voir comment les visiteurs utilisent le site Web, par exemple les cookies d'analyse. Ces cookies ne peuvent pas être utilisés pour identifier directement un visiteur spécifique.</p>
          <div className="mt-2">
            <button onClick={toggleCookiesMenu} className="bg-gray-500 text-white px-4 py-2 rounded-md">{showCookiesMenu ? 'Masquer les cookies' : 'Afficher les cookies'}</button>
            {showCookiesMenu && (
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-700 text-white">
                    <th className="p-2">Nom</th>
                    <th className="p-2">Fournisseur / Domaine</th>
                    <th className="p-2">Expiration</th>
                    <th className="p-2">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-900">
                    <td className="p-2">m</td>
                    <td className="p-2">Stripe</td>
                    <td className="p-2">2 ans</td>
                    <td className="p-2">Ce cookie est généralement utilisé pour la performance et l'optimisation des services de traitement de paiement, facilitant la mise en cache du contenu sur le navigateur pour rendre les pages charger plus rapidement.</td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default CookieConsentPopup;
