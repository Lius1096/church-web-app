import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bibleImage from '../assets/bible.png'; // Importez l'image de la Bible
import bibleImage1 from '../assets/bible1.png'; // Importez l'image de la Bible
import bibleImage2 from '../assets/bible2.png'; // Importez l'image de la Bible

function BlogCarousel() {
  // Données fictives des blogs
  const blogs = [
    {
      title: "Textes et prédication du 07 avril",
      text: "Qu’est-ce que Pâques, qu’est-ce que la résurrection fait de nous ?",
      image: bibleImage, // Utilisation de l'image importée de la Bible
    },
    {
      title: "Le culte de Pâques 2024",
      text: "Voici les textes, prières et prédication du culte de Pâques 2024",
      image: bibleImage1, // Utilisation de l'image importée de la Bible
    },
    {
      title: "Lecture et Partage",
      text: "à partir du jeudi  19 octobre",
      image: bibleImage2, // Utilisation de l'image importée de la Bible
    },
    // Ajoutez d'autres données de blog ici...
  ];

  // Configuration du carrousel
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="container mx-auto py-8">
      <Slider {...settings}>
        {blogs.map((blog, index) => (
          <div key={index} className="grid grid-cols-3 gap-4">
            <div className="col-span-1">
              <img src={blog.image} alt={blog.title} className="w-full h-auto rounded-md" />
              <h2 className="text-lg font-bold my-2">{blog.title}</h2>
              <p className="text-sm text-gray-600">{blog.text}</p>
            </div>
            <div className="col-span-1">
              <img src={blog.image} alt={blog.title} className="w-full h-auto rounded-md" />
              <h2 className="text-lg font-bold my-2">{blog.title}</h2>
              <p className="text-sm text-gray-600">{blog.text}</p>
            </div>
            <div className="col-span-1">
              <img src={blog.image} alt={blog.title} className="w-full h-auto rounded-md" />
              <h2 className="text-lg font-bold my-2">{blog.title}</h2>
              <p className="text-sm text-gray-600">{blog.text}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default BlogCarousel;
