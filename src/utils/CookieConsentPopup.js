import React, { useState } from 'react';

function CookieConsentPopup({ onConsent, onRefuse }) {
  const [cookies, setCookies] = useState({
    analytics: false,
    marketing: false,
    preferences: false,
  });

  const handleConsent = () => {
    onConsent(cookies); // Appeler la fonction onConsent passée en tant que prop avec les cookies sélectionnés
  };

  const handleRefuse = () => {
    onRefuse(); // Appeler la fonction onRefuse passée en tant que prop
  };

  const handleToggleCookie = (cookie) => {
    setCookies(prevCookies => ({
      ...prevCookies,
      [cookie]: !prevCookies[cookie],
    }));
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4">
      <p>Nous utilisons des cookies pour améliorer votre expérience. En continuant à utiliser notre site, vous acceptez notre utilisation des cookies.</p>
      <div className="mt-4">
        <div className="flex items-center mb-2">
          <input type="checkbox" id="analytics" checked={cookies.analytics} onChange={() => handleToggleCookie('analytics')} />
          <label htmlFor="analytics" className="ml-2">Cookies d'analyse</label>
        </div>
        <div className="flex items-center mb-2">
          <input type="checkbox" id="marketing" checked={cookies.marketing} onChange={() => handleToggleCookie('marketing')} />
          <label htmlFor="marketing" className="ml-2">Cookies marketing</label>
        </div>
        <div className="flex items-center mb-2">
          <input type="checkbox" id="preferences" checked={cookies.preferences} onChange={() => handleToggleCookie('preferences')} />
          <label htmlFor="preferences" className="ml-2">Cookies de préférences</label>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <button onClick={handleRefuse} className="bg-red-500 text-white px-4 py-2 rounded-md">Refuser</button>
        <button onClick={handleConsent} className="bg-blue-500 text-white px-4 py-2 rounded-md">Accepter</button>
      </div>
    </div>
  );
}

export default CookieConsentPopup;
