import React, { useState } from 'react';

function NewsletterSignup() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique pour soumettre l'e-mail à votre système de gestion d'e-mails
    console.log('Email soumis :', email);
    // Réinitialisez le champ e-mail après la soumission
    setEmail('');
  };

  return (
    <div className="max-w-md mx-auto px-4 py-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Inscrivez-vous à notre newsletter</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Entrez votre adresse e-mail"
          className="block w-full py-2 px-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring"
        >
          S'inscrire
        </button>
      </form>
    </div>
  );
}

export default NewsletterSignup;
