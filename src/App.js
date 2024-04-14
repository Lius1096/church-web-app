// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Messages from './pages/Messages';
import Blog from './pages/Blog';
import Ministries from './pages/Ministries';
import Resources from './pages/Resources';
import Events from './pages/Events';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/event" element={<Events />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/ministries" element={<Ministries />} />
        <Route path="/resources" element={<Resources />} />
        {/* Ajoutez les autres routes ici */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
