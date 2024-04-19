import React from 'react';

function Resources() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white shadow-md rounded-md p-6">
        <h2 className="text-2xl font-bold mb-4">Ressources en ligne</h2>
        <div className="border-b border-gray-200 mb-6 pb-4">
          <h3 className="text-lg font-semibold mb-2">Études bibliques en ligne :</h3>
          <div className="ml-6">
            <a href="lien_vers_etude_biblique_1" className="text-blue-600 hover:underline block mb-2">Étude biblique sur le livre de Jean</a>
            <a href="lien_vers_etude_biblique_2" className="text-blue-600 hover:underline block">Étude biblique sur la prière</a>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Lectures recommandées :</h3>
          <div className="ml-6">
            <a href="lien_vers_livre_1" className="text-blue-600 hover:underline block mb-2">"Le chrétien et la prière" par John Doe</a>
            <a href="lien_vers_livre_2" className="text-blue-600 hover:underline block mb-2">"La foi en action" par Jane Smith</a>
            <a href="lien_vers_livre_3" className="text-blue-600 hover:underline block mb-2">"Les miracles dans la Bible" par Sarah Johnson</a>
            <a href="lien_vers_livre_4" className="text-blue-600 hover:underline block">"La vie de Jésus" par Marc Dupont</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resources;
