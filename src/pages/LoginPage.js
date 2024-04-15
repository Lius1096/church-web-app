import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import CookieManager from '../utils/CookieManager'; // Importez votre utilitaire CookieManager

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [recaptchaValue, setRecaptchaValue] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Exemple de validation du formulaire (à adapter selon votre logique)
    if (email && password && recaptchaValue) {
      // Ajoutez ici la logique pour traiter la soumission du formulaire
      console.log('Email:', email);
      console.log('Password:', password);
      console.log('reCAPTCHA Value:', recaptchaValue);
      // Exemple d'utilisation des cookies pour stocker les informations de connexion
      CookieManager.setCookie("userEmail", email, 30); // Stockez l'email pendant 30 jours
      CookieManager.setCookie("isLoggedIn", "true", 30); // Indiquez que l'utilisateur est connecté
      // Redirigez l'utilisateur vers une autre page, par exemple la page d'accueil
      window.location.href = '/';
    } else {
      alert("Veuillez remplir tous les champs et cocher la case reCAPTCHA.");
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Connexion</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500" value={email} onChange={handleEmailChange} required />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mot de passe</label>
          <input type="password" id="password" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500" value={password} onChange={handlePasswordChange} required />
        </div>
        {/* Intégration de reCAPTCHA */}
        <ReCAPTCHA
          sitekey="09AH1nMHIlYnp-EvjiuJPj8rCjy0PTge9Ef81u_0W15iSbgybISKtPBCX8xqV-MVLtC_MQZBJUsRjWYfzLZsCqONMb8Q3D3R8WrKKLcw" // Remplacez par votre clé de site reCAPTCHA
          onChange={handleRecaptchaChange}
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Se connecter</button>
      </form>
    </div>
  );
}

export default LoginPage;
