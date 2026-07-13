import { IoMdMenu as Menu } from "react-icons/io";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { FiSettings, FiHome } from "react-icons/fi";
import { LuMessageCircleQuestion as LuQuestion } from "react-icons/lu";
import { MdOutlineSchool } from "react-icons/md"
import Welcome from "./pages/Welcome";
import Home from "./pages/Home"
import React, { useState } from "react";
import Sidebar from "./components/Sidebar/index.js"
import Navbar from "./components/Navbar/index.js";


export default function Screen() {
  const [activeMenu, setActiveMenu] = useState(true);
  const [homeClicked, setHomeClicked] = useState(false);
  const [subjectClicked, setSubjectClicked] = useState(false);
  const [aboutClicked, setAboutClicked] = useState(false);

  return (
    <div className="h-screen dark:bg-zinc-800 bg-mist-300">
      <BrowserRouter>
        <div className="flex dark:text-white text-black space-x-4">
          {/*Sidebar*/}
          {activeMenu ? (
            <Sidebar.Root width={40} padding={6}>
              <Sidebar.Icon icon={<FiSettings />} />
              <Navbar.Root>
                <Navbar.Tab title="Início" callback={setHomeClicked}/>
                <Navbar.Tab title="Disciplinas" callback={setSubjectClicked} />
                <Navbar.Tab title="Sobre" callback={setAboutClicked}/>
              </Navbar.Root>
            </Sidebar.Root>
          ) : (
            <Sidebar.Root width={0} padding={0}>
            </Sidebar.Root>
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
