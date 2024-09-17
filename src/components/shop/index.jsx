import React, { useState } from "react";
import Nav from "../nav";
import Footer from "../footer";

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Smart Kitchen Timer",
      price: 19.99,
      description: "A smart timer for perfect cooking every time.",
      imageUrl:
        "https://www.denis-ros.com/wp-content/uploads/2024/08/cokies2.jpg",
    },
    {
      id: 2,
      name: "Ceramic Vase Set",
      price: 35.0,
      description: "Elegant ceramic vases for your home decoration.",
      imageUrl:
        "https://www.denis-ros.com/wp-content/uploads/2024/08/cokies2.jpg",
    },
    {
      id: 3,
      name: "Non-Stick Frying Pan",
      price: 45.0,
      description: "High-quality frying pan with non-stick coating.",
      imageUrl:
        "https://www.denis-ros.com/wp-content/uploads/2024/08/cokies2.jpg",
    },
    {
      id: 4,
      name: "Wooden Cutting Board",
      price: 29.99,
      description: "Durable and stylish wooden cutting board.",
      imageUrl: "https://source.unsplash.com/600x400/?cutting,board",
    },
    {
      id: 5,
      name: "Stainless Steel Knife Set",
      price: 89.99,
      description: "Professional knife set for all your culinary needs.",
      imageUrl: "https://source.unsplash.com/600x400/?knife,kitchen",
    },
    {
      id: 6,
      name: "Glass Storage Jars",
      price: 25.0,
      description: "Set of glass jars for storing food or spices.",
      imageUrl: "https://source.unsplash.com/600x400/?storage,jars",
    },
    {
      id: 7,
      name: "Electric Hand Mixer",
      price: 49.99,
      description: "Powerful hand mixer for effortless mixing and baking.",
      imageUrl: "https://source.unsplash.com/600x400/?hand,mixer",
    },
    {
      id: 8,
      name: "Espresso Coffee Maker",
      price: 120.0,
      description:
        "Brew delicious espresso at home with this easy-to-use machine.",
      imageUrl: "https://source.unsplash.com/600x400/?espresso,coffee",
    },
    {
      id: 9,
      name: "Silicone Baking Mat",
      price: 15.99,
      description:
        "Reusable non-stick silicone mat for baking and rolling dough.",
      imageUrl: "https://source.unsplash.com/600x400/?baking,mat",
    },
  ];

  return (
    <>
      <Nav />
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Shop
        </h1>
        <div className="grid grid-cols-5 mx-24">
          <div className="col-span-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-crema border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="h-48 w-full object-cover transform transition-transform duration-500 ease-in-out hover:scale-125"
                  />

                  <div className="p-6">
                    <h2 className="text-2xl font-semibold text-gray-800">
                      {product.name}
                    </h2>
                    <p className="text-gray-600 mt-2">{product.description}</p>
                    <div className="mt-4">
                      <span className="text-xl font-bold text-grisOsc">
                        ${product.price.toFixed(2)}
                      </span>
                    </div>
                    <button className="mt-6 w-full bg-grisOsc text-white py-2 rounded-lg hover:bg-gris transition-colors duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-1">asdasd</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
