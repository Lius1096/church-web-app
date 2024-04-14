import React, { useState } from 'react';
import eventImage1 from '../assets/event1.png';
import eventImage2 from '../assets/event2.png';
import eventImage3 from '../assets/event3.png';

function EventsSection() {
  // Données fictives des événements
  const events = [
    {
      title: "Événement 1",
      date: "01/04/2024",
      time: "10:00",
      location: "Lieu 1",
      image: eventImage1,
    },
    {
      title: "Événement 2",
      date: "02/04/2024",
      time: "15:00",
      location: "Lieu 2",
      image: eventImage2,
    },
    {
      title: "Événement 3",
      date: "03/04/2024",
      time: "18:00",
      location: "Lieu 3",
      image: eventImage3,
    },
  ];

  // État pour suivre l'événement actuellement sélectionné
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Fonction pour gérer le clic sur un événement
  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Événements à venir</h2>
      <div className="grid grid-cols-3 gap-6">
        {/* Liste des événements */}
        {events.map((event, index) => (
          <div
            key={index}
            className="p-4 bg-gray-100 rounded-md cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
            onClick={() => handleEventClick(event)}
          >
            <img src={event.image} alt={event.title} className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
            <p className="text-sm text-gray-500 mb-2">Date: {event.date}</p>
            <p className="text-sm text-gray-500 mb-2">Heure: {event.time}</p>
            <p className="text-sm text-gray-500">Lieu: {event.location}</p>
          </div>
        ))}
      </div>

      {/* Affichage des détails de l'événement sélectionné */}
      {selectedEvent && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">{selectedEvent.title}</h2>
          <p className="text-sm text-gray-500 mb-2">Date: {selectedEvent.date}</p>
          <p className="text-sm text-gray-500 mb-2">Heure: {selectedEvent.time}</p>
          <p className="text-sm text-gray-500 mb-2">Lieu: {selectedEvent.location}</p>
          <img src={selectedEvent.image} alt={selectedEvent.title} className="w-full h-auto rounded-md" />
        </div>
      )}
    </div>
  );
}

export default EventsSection;
