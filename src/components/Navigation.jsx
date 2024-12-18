import React from "react";
import '../App.css'
import { Link } from "react-router-dom";
import { useState } from "react";
// Icons
import { MdHome } from "react-icons/md";
import { FaSearch, FaCaretDown } from "react-icons/fa";
import { IoIosAddCircle, IoMdCreate, IoIosRemoveCircle, IoMdPerson } from "react-icons/io";

export default function Navigation() {
  let bool = false
  const [searchChange, searchSetChange] = useState(bool);     // Search input
  const [profileChange, setProfileChange] = useState(false); // Menu profile

  const pfpClick = () => {
      setProfileChange(!profileChange); // Toggle visibility on button click
  };

  function goSearch() {
    bool = !bool
    searchSetChange(bool)
  }
  return (
    <nav>
      <div className="bg-gradient-to-r from-[#f5b401] to-[yellow] text-[40px] py-[10px] tracking-[10px] flex justify-center">
        <span>MERN</span>
        <button 
          className="absolute right-[70px] bg-[#0000002c] rounded-[50%] w-[64px] h-[64px] border-black border-[1px] border-solid flex justify-center items-center"
          onClick={pfpClick}
        >
          <IoMdPerson/>
          {profileChange && (
          <div className="bg-white border-solid border-black border-[1px] w-[140px] h-[100px] absolute top-[63px]
            flex flex-col justify-evenly
          ">
            <Link to="/login" className="pfpCss">Login</Link>
            <Link to="/register" className="pfpCss">Register</Link>
          </div>
        )}
        </button>
        
      </div>
      <div className="bg-gradient-to-t from-[#CCCCCC] to-[#999999] flex justify-around items-center py-[10px] px-[100px]">
        <Link to="/">
          <MdHome size={32} />
        </Link>
        <div className="navAlign">
          Actualités
          <FaCaretDown size={20} />
        </div>
        <div className="navAlign">
          Blog
          <FaCaretDown size={20} />
        </div>
        <a className="navAlign" href="/gestion">
          Gestion d'articles
          <IoMdCreate size={20} />
        </a>
        {/* <div className="navAlign">
          Créer un article
          <IoIosAddCircle size={20} />
        </div>
        <div className="navAlign">
          Modifier article
          <IoMdCreate size={20} />
        </div>
        <div className="navAlign">
          Suprimmer article
          <IoIosRemoveCircle size={20} />
        </div> */}
        <button onClick={goSearch}>
          <FaSearch size={32} />
          {searchChange && <input className="absolute top-[132px] right-5" placeholder="Rechercher" type="text" />}
        </button>
      </div>
    </nav>
  );
}
