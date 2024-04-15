import React, { useState } from 'react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique pour traiter la soumission du formulaire
    console.log('Email:', email);
    console.log('Password:', password);
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
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Se connecter</button>
      </form>
    </div>
  );
}

export default LoginPage;
