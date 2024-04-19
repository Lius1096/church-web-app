// Home.js
import React from 'react';
import Blog from './Blog'; 
import Events from './Events';
import ContactForm from '../components/ContactForm';
import NewsletterSignup from '../components/NewsletterSignup';
function Home() {
  return (
    <div style={{ backgroundColor: 'white', padding: '20px' }}>
      <div className="container">
        <h1>Bienvenue à votre église</h1>
        {/* Ajoutez d'autres éléments de la page d'accueil ici */}
        <Blog /> 
        <Events/>
        <ContactForm />
        <NewsletterSignup />
      </div>
    </div>
  );
}

export default Home;
