import React from "react";
import Image1 from "../images/image.png";
import { useEffect, useState } from "react";
// import { getSuggestedQuery } from "@testing-library/react";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [token, setToken] = useState(""); // Assure-toi d'avoir le token après la connexion

  const getUser = async () => {
    const response = await fetch('http://localhost:3035/user', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      const data = await response.json();
      setUsers(data);
    }
  };

  useEffect(() => {
    if (token) {
      getUser(); // Appelle getUser seulement si le token est disponible
    }
  }, [token]);
  return (
    <div>
      <main className="mt-[50px] bg-[#FFFFFF] border-solid border-[black] border-[1px] mx-[70px] py-[30px] px-[30px] flex gap-[30px]">
        <div className="LEFT w-[50%]">
          <div>
            <img className="w-[100%]" src={Image1} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio reiciendis beatae modi.</p>
          </div>
        </div>
        <div className="RIGHT w-[50%] flex gap-[25px]">
          <div className="w-[50%]">
            <img className="w-[100%]" src={Image1} alt="res: 250x170" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio reiciendis beatae modi.</p>
          </div>
          <div className="w-[50%]">
            <img className="w-[100%]" src={Image1} alt="res: 250x170" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio reiciendis beatae modi.</p>
          </div>
        </div>
      </main>
      {/* <div className="Pagination">Pages: 
        <input type="text" name="" id="" />
        <a href="">Next</a>
      </div> */}
      <footer className="flex justify-center py-[30px] w-[100%] fixed bottom-0 bg-gray-800 text-[white]">
        Contacter-nous
      </footer>
    </div>
  );
}