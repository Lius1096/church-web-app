import React, { useState } from 'react';

function PaymentPage() {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleExpirationDateChange = (e) => {
    setExpirationDate(e.target.value);
  };

  const handleCvvChange = (e) => {
    setCvv(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique de traitement du paiement
    console.log('Informations de paiement:', {
      cardNumber,
      expirationDate,
      cvv,
      name
    });
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Paiement</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Numéro de carte</label>
          <input type="text" id="cardNumber" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500" value={cardNumber} onChange={handleCardNumberChange} required />
        </div>
        <div className="mb-4">
          <label htmlFor="expirationDate" className="block text-sm font-medium text-gray-700">Date d'expiration</label>
          <input type="text" id="expirationDate" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500" value={expirationDate} onChange={handleExpirationDateChange} required />
        </div>
        <div className="mb-4">
          <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
          <input type="text" id="cvv" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500" value={cvv} onChange={handleCvvChange} required />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom sur la carte</label>
          <input type="text" id="name" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500" value={name} onChange={handleNameChange} required />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Payer</button>
      </form>
    </div>
  );
}

export default PaymentPage;
