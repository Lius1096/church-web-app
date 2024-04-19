// App.js
import Cookies from 'js-cookie';
import React, { useEffect } from 'react';
import  { useState } from 'react';

//import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Messages from './pages/Messages';
import Blog from './pages/Blog';
import Ministries from './pages/Ministries';
import Resources from './pages/Resources';
import Events from './pages/Events';
import LoginPage from './pages/Login';
import RegistrationPage from './pages/Registration';
import CookieConsentPopup from './utils/CookieConsentPopup';
import PaymentPage from './pages/Payment';
import QuiSommesNous from './components/QuiSommesNous';
import ContactForm from './components/ContactForm';
import MentionsLegales from './pages/MentionsLegales';
import NewsletterSignup from './components/NewsletterSignup';

function App() {
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    // Vérifiez si l'utilisateur a déjà donné son consentement en consultant le cookie
    const consentCookie = Cookies.get('consentGiven');
    if (consentCookie === 'true') {
      setConsentGiven(true);
    }
  }, []);

  const handleConsent = () => {
    // Enregistrez le consentement de l'utilisateur dans un cookie
    Cookies.set('consentGiven', 'true', { expires: 365 }); // Le cookie expire dans 1 an
    setConsentGiven(true);
  };
 // Fonction de gestion du refus des cookies
 const handleRefuse = () => {
  // Vous pouvez mettre ici le code pour gérer le refus des cookies
  console.log("Cookies refused");
};
  
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Events />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/ministries" element={<Ministries />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/registrationpage" element={<RegistrationPage />} />
        <Route path="/cookieconsentpopup" element={<CookieConsentPopup />} />
        <Route path="/payment" element={<PaymentPage />} /> 
        <Route path="/qui-sommes-nous" element={<QuiSommesNous />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/mentions-legales"element={<MentionsLegales />} />
        <Route path="/newslettersignup"element={<NewsletterSignup />} />
        {/* Ajoutez les autres routes ici */}
      </Routes>
      <Footer />
      <div>
      {/* Afficher le popup des cookies uniquement si le consentement n'a pas été donné */}
      {!consentGiven && <CookieConsentPopup onConsent={handleConsent} onRefuse={handleRefuse} />}
      {/* Autres éléments de votre application */}
    </div>
    </Router>
  );
}

export default App;
