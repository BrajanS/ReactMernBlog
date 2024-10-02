import React from 'react'
import { MdHome } from "react-icons/md";
import { FaSearch, FaCaretDown } from "react-icons/fa";
import { IoIosAddCircle, IoMdCreate, IoIosRemoveCircle } from "react-icons/io";


export default function Home() {
  return (
    <div className='bg-[#EEEEEE] h-[100vh]'>
      <header>
        <div className='bg-yellow-500 text-[40px] py-[10px] tracking-[10px] flex justify-center'
        >MERN</div>
        <nav className='bg-[#CCCCCC] flex justify-around items-center py-[10px] px-[100px]'>
          <MdHome size={32}/>
          <div className='navAlign'>Actualités<FaCaretDown size={20}/></div>
          <div className='navAlign'>Blog<FaCaretDown size={20}/></div>
          <div className='navAlign'>Créer un article<IoIosAddCircle size={20} /></div>
          <div className='navAlign'>Modifier article<IoMdCreate size={20}/></div>
          <div className='navAlign'>Suprimmer article<IoIosRemoveCircle size={20}/></div>
          <FaSearch size={32}/>
        </nav>
      </header>
      <main className='bg-[#FFFFFF] mx-[100px] mt-[50px]'>
        <div className='LEFT'>
          <div>
            <img src="" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio reiciendis beatae modi.</p>
          </div>
        </div>
        <div className='RIGHT'>

        </div>
      </main>
      <footer className='flex justify-center py-[30px] bottom-0
        bg-gray-800 text-[white]'
      >Contacter-nous</footer>
    </div>
  )
}