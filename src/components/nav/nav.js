import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      {/* Primer div: blanco, texto separado en dos partes */}
      <div className="bg-white w-full flex justify-items-stretch font-custom">
        <div className="mx-24 py-2 flex w-full ">
          <a className="text-blackL">Categorias</a>
          <a className="text-blackL">Marcas</a>
          <a className="text-blackL">Productos</a>
        </div>
        <div className="mx-24 py-2 flex">
          <a className="text-blackL">Tienda</a>
        </div>
      </div>

      {/* Segundo div: cremita, texto separado en dos partes */}
      <div className="bg-crema w-full flex justify-items-stretch text-etiqueta font-custom">
        <div className="mx-24 py-3 flex w-full">
          <span className="text-gray-900">Black Friday Discounts</span>
        </div>
        <div className="mx-24 py-3 flex">
          {/* Puedes agregar más elementos aquí si es necesario */}
        </div>
      </div>

      {/* Tercer div: blanco, texto separado en dos partes */}
      <div className="bg-white w-full flex justify-items-stretch font-custom">
        <div className="mx-24 py-2 flex w-full">
          <a className=" text-blackL">Categorias</a>
          <a className=" text-blackL">Marcas</a>
          <a className=" text-blackL">Productos</a>
        </div>
        <div className="mx-24 py-2 flex">
          <a className="text-blackL">Usuario</a>
        </div>
      </div>
      <div className="bg-white w-full relative flex items-center font-custom">
        {/* Primer div: Buscador */}
        <div className="absolute left-0 mx-24 py-6 flex w-full max-w-md">
          <input
            type="text"
            placeholder="Buscar producto..."
            className="border border-blackL bg-crema px-4 py-2 w-1/2"
          />
          <button className="ml-2 bg-gray-800 text-white px-4 py-2 hover:bg-gray-700">
            Buscar
          </button>
        </div>

        {/* Segundo div: Título centrado */}
        <div className="w-full flex justify-center py-6">
          <h1 className="text-titulo font-custom text-gray-800">E-COMMERCE</h1>
        </div>
      </div>
      <div className="bg-white w-full flex justify-center font-custom">
        <div className="py-2 flex items-center space-x-2 mx-24 font-parrafo">
          <a className="text-blackL px-2">Marcas</a>
          <a className="text-blackL px-2">Marcas</a>
          <a className="text-blackL px-2">Marcas</a>
          <a className="text-blackL px-2">Marcas</a>
          <a className="text-blackL px-2">Marcas</a>
          <a className="text-blackL px-2">Marcas</a>
          <a className="text-blackL px-2">Marcas</a>
          <a className="text-blackL px-2">Marcas</a>
          <a className="text-blackL px-2">Marcas</a>
          <a className="text-blackL px-2">Marcas</a>
          <a className="text-blackL px-2">Marcas</a>
          <a className="text-blackL px-2">Marcas</a>
        </div>
      </div>
      <div className="bg-white w-full flex justify-center font-custom">
        <div className="py-2 flex items-center space-x-2 mx-24 text-etiqueta">
          <a className="text-blackL px-2">Categorias</a>
          <a className="text-blackL px-2">Categorias</a>
          <a className="text-blackL px-2">Categorias</a>
          <a className="text-blackL px-2">Categorias</a>
          <a className="text-blackL px-2">Categorias</a>
          <a className="text-blackL px-2">Categorias</a>
          <a className="text-blackL px-2">Categorias</a>
          <a className="text-blackL px-2">Categorias</a>
          <a className="text-blackL px-2">Categorias</a>
          <a className="text-blackL px-2">Categorias</a>
          <a className="text-blackL px-2">Categorias</a>
          <a className="text-blackL px-2">Categorias</a>
        </div>
      </div>
    </>
  );
};

export default Nav;
