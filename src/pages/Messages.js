// Messages.js
import React from 'react';

function Messages() {
  return (
    <div>
      <h2>Messages et enseignements</h2>
      <p>Écoutez notre dernier sermon :</p>
      <audio controls>
        <source src="lien_vers_enregistrement_audio.mp3" type="audio/mpeg" />
        Votre navigateur ne supporte pas l'élément audio.
      </audio>
      <p>Transcription :</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
    </div>
  );
}

export default Messages;
