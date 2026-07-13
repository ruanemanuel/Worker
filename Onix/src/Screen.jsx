import { IoMdMenu as Menu } from "react-icons/io";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { FiSettings, FiHome } from "react-icons/fi";
import { LuMessageCircleQuestion as LuQuestion } from "react-icons/lu";
import { MdOutlineSchool } from "react-icons/md"
import Welcome from "./pages/Welcome";
import Home from "./pages/Home"
import React, { useState } from "react";

export default function Screen() {
  const [activeMenu, setActiveMenu] = useState(true);
  const [homeClicked, setHomeClicked] = useState(false);



  return (
    <div className="h-screen dark:bg-zinc-800 bg-mist-300">
      <BrowserRouter>
        <div className="flex dark:text-white text-black space-x-4">
          {/*Sidebar*/}
          {activeMenu ? (
            <aside className="p-6 flex w-40 h-screen bg-zinc-900 justify-center text-white">
              <button
                className="absolute top-3 text-xl p-2"
                style={{
                  cursor: "pointer",
                  background: "#68696d",
                  borderRadius: "25%",
                }}
                type="button"
              >
                <FiSettings />
              </button>
              <nav className="flex flex-col gap-3 mt-8 text-white">
                <button className="hover:bg-white/20 rounded-md p-2 pointer border-[#68696d] border-2"
                        onClick={() => setHomeClicked(true)}
                >
                  Início
                </button>
                <button className="hover:bg-white/20 rounded-md p-2 pointer border-[#68696d] border-2">
                  Disciplinas
                </button>
                <button className="hover:bg-white/20 rounded-md p-2 pointer border-[#68696d] border-2">
                  Sobre
                </button>
              </nav>
            </aside>
          ) : (
            <aside className="p-6 flex w-20 h-screen bg-zinc-900 justify-center">
              <button
                className="absolute top-3 text-xl p-2"
                style={{
                  cursor: "pointer",
                  background: "#68696d",
                  borderRadius: "25%",
                }}
                type="button"
              >
                <FiSettings />
              </button>
              <nav className="flex flex-col gap-3 mt-8">
                <button className="hover:bg-white/20 rounded-md p-2 pointer border-[#68696d] border-2"
                        onClick={() => {setHomeClicked(true)}}
                >
                  <FiHome />
                </button>
                <button className="hover:bg-white/20 rounded-md p-2 pointer border-[#68696d] border-2">
                  <MdOutlineSchool />
                </button>
                <button className="hover:bg-white/20 rounded-md p-2 pointer border-[#68696d] border-2">
                  <LuQuestion />
                </button>
              </nav>
            </aside>
          )}

          {/*Tela Inicial*/}
          <main className="flex">
            <div className="space-x-2 flex mt-5">
              <Menu
                className="text-2xl bg-zinc-400 text-black rounded-xs pointer"
                onClick={() => setActiveMenu(activeMenu ? false : true)}
              />
            </div>
            {homeClicked ? (
              <Home />
            ) : (
              <Welcome />
            )}
            
          </main>
        </div>
        <div>
          <Routes>
            {/*Rotas de Navegação*/}
            <Route path="/" element={<Welcome />} />
            <Route path="/home" element={<Home />} />
            <Route path="/subject" element="Subject" />
            <Route path="/about" element="About" />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
