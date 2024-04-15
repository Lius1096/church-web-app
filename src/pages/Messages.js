import React from 'react';

function Messages() {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-2xl justify-center flex font-bold mb-4">Messages et enseignements</h2>
      <div className="flex flex-wrap gap-4">
        <div className="flex-1 border p-4 rounded-md shadow-md">
          <h3 className="text-lg font-semibold mb-2">Voix alternative  :</h3>
          <audio controls className="w-full mb-2">
            <source src="lien_vers_enregistrement_audio.mp3" type="audio/mpeg" />
            Votre navigateur ne supporte pas l'élément audio.
          </audio>
          <p className="text-gray-600">Transcription :</p>
          <p className="text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </div>
        <div className="flex-1 border p-4 rounded-md shadow-md">
          <h3 className="text-lg font-semibold mb-2">Voix alternative 1 :</h3>
          <audio controls className="w-full mb-2">
            <source src="lien_vers_enregistrement_audio.mp3" type="audio/mpeg" />
            Votre navigateur ne supporte pas l'élément audio.
          </audio>
          <p className="text-gray-600">Transcription :</p>
          <p className="text-gray-800">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
        </div>
        <div className="flex-1 border p-4 rounded-md shadow-md">
          <h3 className="text-lg font-semibold mb-2">Voix alternative 2 :</h3>
          <audio controls className="w-full mb-2">
            <source src="lien_vers_enregistrement_audio.mp3" type="audio/mpeg" />
            Votre navigateur ne supporte pas l'élément audio.
          </audio>
          <p className="text-gray-600">Transcription :</p>
          <p className="text-gray-800">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
        </div>
        <div className="flex-1 border p-4 rounded-md shadow-md">
          <h3 className="text-lg font-semibold mb-2">Voix alternative 3 :</h3>
          <audio controls className="w-full mb-2">
            <source src="lien_vers_enregistrement_audio.mp3" type="audio/mpeg" />
            Votre navigateur ne supporte pas l'élément audio.
          </audio>
          <p className="text-gray-600">Transcription :</p>
          <p className="text-gray-800">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...</p>
        </div>
      </div>
    </div>
  );
}

export default Messages;
