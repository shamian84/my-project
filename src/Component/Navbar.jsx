import axios from "axios";
import logo from "../assets/logo.png";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const list = [
    { name: "Home", href: "/" },
    { name: "AllCategories", href: "/All Categories" },
    { name: "Contact Us", href: "/Contact Us" },
    { name: "Buyer Requirements", href: "/Buyer" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <nav className="shawdow-md w-full fixed top-0 left-0 z-10">
      <div className="md:flex items-center justify-around bg-white py-2 md:px-8 px-7 shadow-lg">
        <div className="h-auto md:w-xs">
          <img src={logo} alt="logo" />
        </div>
        <div
          onClick={() => setOpen(!open)}
          className=" text-3xl absolute right-6 top-7  cursor-pointer  md:hidden"
        >
          <ion-icon name={open ? "close" : "Menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center cursor-pointer   md:pb-0 pb-7 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full
           md:w-auto md:pl-0 pl-9 translate-all duration-500 ease-in ${
             open ? "top-18" : "top-[-490px]"
           }`}
        >
          {/* {list.map((list) => (
            <li
              key={list.list}
              className=" mx-5 text-lg md:my-0 my-6 hover:underline "
              <a href={list.list}>{list.name}</a>
              `        >
            </li>
          ))} */}
          <li className="hover:text-blue-700 cursor-pointer mx-5 text-lg md:my-0 my-6">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-blue-700 cursor-pointer mx-5 text-lg md:my-0 my-6">
            <Link to="/allcategories">All Categories</Link>
          </li>
          <li className="hover:text-blue-700 cursor-pointer mx-5 text-lg md:my-0 my-6">
            <Link to="/about">About Us</Link>
          </li>
          <li className="hover:text-blue-700 cursor-pointer mx-5 text-lg md:my-0 my-6">
            <Link to="/Buyer">Buyer Requirement</Link>
          </li>
          <button className="bg-white text-blue-800 font-bold border border-blue-800 py-2 px-8 rounded mx-3 my-3">
            <Link to="/login">Login</Link>
          </button>
          <button className="bg-amber-400 hover:bg-amber-300 text-black border border-slate-900  font-bold py-2 px-8 rounded mx-3 my-3">
            Sell
          </button>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
