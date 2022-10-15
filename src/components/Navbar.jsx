import Link from "next/link";
import React from "react";
import { FaFacebookSquare, FaLinkedin, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="fixed left-0 top-0 w-full h-14 z-10 ease-in duration-300 bg-slate-800">
      <div className="w-full flex justify-between items-center pl-2 text-white">
        <Link href="/">
          <h1 className="font-bold text-1x ml-10">
            Meireles e Freitas <span className="text-green-500">Digital</span>
          </h1>
        </Link>
        <ul className="flex items-center mr-10">
          <li className="p-2  hover:text-white text-gray-200">
            <Link href="#" className="text-xl font-bold hover:text-bold ">
              Produtos
            </Link>
          </li>
          <li className="p-2 hover:text-white text-gray-200">
            <Link href="#" className="text-xl font-bold hover:text-bold">
              Comercial
            </Link>
          </li>
          <li className="p-2 hover:text-white text-gray-200">
            <Link href="#" className="text-xl font-bold hover:text-bold">
              Blog
            </Link>
          </li>
          <li className="p-2  hover:text-white text-gray-200">
            <Link href="#" className="text-xl font-bold hover:text-bold">
              Trabalhe Conosco
            </Link>
          </li>
          <li className="p-2">
            <button className="px-2 py-1 border rounded-md font-light cursor-pointer">
              Login
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
