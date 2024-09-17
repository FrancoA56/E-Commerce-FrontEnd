import React from "react";
import Footer from "../footer"
import Nav from "../nav";

const Home = () => {
  return (
    <div>
      {/* Barra de Navegación */}
      <Nav />

      {/* Contenido Principal */}
      <div className="w-full bg-white">
        {/* Video a pantalla completa */}
        <div className="w-full mt-4">
          <iframe
            className="w-full h-[500px]" // Ajusta la altura según tus necesidades
            src="https://www.youtube.com/embed/xicZRboWqAI"
            title="Video de YouTube"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Texto o Contenido Adicional */}
        <div className="mx-24 py-8">
          <h2 className="text-2xl font-custom text-gray-800">Bienvenido a nuestra tienda</h2>
          <p className="text-lg text-gray-600 mt-4">
            Aquí encontrarás una amplia gama de productos. Explora nuestras categorías y descubre las mejores ofertas.
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
