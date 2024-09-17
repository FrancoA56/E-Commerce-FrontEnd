import React, { useState } from "react";
import Nav from "../nav";
import Footer from "../footer";

const Detail = () => {
  const [quantity, setQuantity] = useState(1);

  const productData = {
    name: "Azucarera Fusi",
    description: "Contenedor de cerámica y tapa de cerámica. No es hermética.",
    price: 199.99,
    image: "https://www.denis-ros.com/wp-content/uploads/2024/09/DSC03548.jpg",
  };

  const handleAddToCart = () => {
    alert(`${quantity} ${productData.name} added to the cart!`);
    // Aquí iría la lógica para agregar el producto al carrito
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <>
      <Nav />
      <div className="container mx-auto p-8">
        <div className="flex flex-col md:flex-row">
          {/* Imagen del producto */}
          <div className="w-full md:w-1/2 p-4">
            <img
              src={productData.image}
              alt={productData.name}
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Información del producto */}
          <div className="w-full md:w-1/2 p-4">
            <h1 className="text-3xl font-bold mb-4">{productData.name}</h1>

            <p className="text-lg mb-4">{productData.description}</p>

            <div className="mb-4">
              <span className="text-2xl font-semibold text-gray-800">
                ${productData.price}
              </span>
            </div>

            {/* Sección para seleccionar la cantidad */}
            <div className="mb-4">
              <label htmlFor="quantity" className="text-sm text-gray-600">
                Quantity:
              </label>
              <input
                id="quantity"
                type="number"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
                className="border border-gray-300 rounded-md p-2 ml-2 w-16"
              />
            </div>

            {/* Botón para agregar al carrito */}
            <button
              onClick={handleAddToCart}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition duration-300"
            >
              Add to Cart
            </button>

            {/* Valoraciones o reseñas del producto */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>
              <div className="flex items-center mb-4">
                {/* Aquí irían estrellas de rating */}
                <span className="text-yellow-500">★★★★☆</span>
                <p className="ml-2 text-sm text-gray-600">(120 reviews)</p>
              </div>
              <p className="text-gray-600">
                "Amazing product! The quality is fantastic, and it was delivered
                on time."
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Detail;
