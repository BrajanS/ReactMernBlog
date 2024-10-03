import React from 'react'
import { Link } from 'react-router-dom';
// Icons
import { MdHome } from "react-icons/md";
import { FaSearch, FaCaretDown } from "react-icons/fa";
import { IoIosAddCircle, IoMdCreate, IoIosRemoveCircle } from "react-icons/io";

export default function Navigation() {
    
    function goSearch(){}
    
  return (
    <nav>
          <div className='bg-yellow-500 text-[40px] py-[10px] tracking-[10px] flex justify-center'
          >MERN</div>
          <div className='bg-[#CCCCCC] flex justify-around items-center py-[10px] px-[100px]'>
            <Link to='/'><MdHome size={32}/></Link>
            <div className='navAlign'>Actualités<FaCaretDown size={20}/></div>
            <div className='navAlign'>Blog<FaCaretDown size={20}/></div>
            <div className='navAlign'>Créer un article<IoIosAddCircle size={20} /></div>
            <div className='navAlign'>Modifier article<IoMdCreate size={20}/></div>
            <div className='navAlign'>Suprimmer article<IoIosRemoveCircle size={20}/></div>
            <button onClick={goSearch()}><FaSearch size={32}/></button>
          </div>
        </nav>
  )
}
