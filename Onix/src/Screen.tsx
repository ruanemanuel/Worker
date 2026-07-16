import { IoMdMenu as Menu } from "react-icons/io";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import { FiSettings } from "react-icons/fi";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home.js";
import Subject from "./pages/Subject.js";
import About from "./pages/About.js"
import React, { useState } from "react";
import Sidebar from "./components/Sidebar/index.js"
import Navbar from "./components/Navbar/index.js";
import Main from "./components/Main/index.js"
type Status = boolean;

export default function Screen() {
  const [activeMenu, setActiveMenu] = useState<Status>(true);
  const [homeClicked, setHomeClicked] = useState<Status>(false);
  const [subjectClicked, setSubjectClicked] = useState<Status>(false);
  const [aboutClicked, setAboutClicked] = useState<Status>(false);




  const renderPage = (
    homeStatus: Status,
    subjectStatus: Status,
    aboutStatus: Status
  ) => {
    setHomeClicked(homeStatus);
    setSubjectClicked(subjectStatus);
    setAboutClicked(aboutStatus);
  }






  return (
    <div className="h-screen dark:bg-zinc-800 bg-mist-300">
      <BrowserRouter>
        <div className="flex dark:text-white text-black space-x-4">
          {/*Sidebar*/}
          {activeMenu ? (
            <Sidebar.Root width={40} padding={6}>
              <Sidebar.Icon icon={<FiSettings />} />
              <Navbar.Root>
                <Navbar.Tab title="Início" onClick={() => renderPage(true, false, false)} />
                <Navbar.Tab title="Disciplinas" onClick={() => renderPage(false, true, false)} />
                <Navbar.Tab title="Sobre" onClick={() => renderPage(false, false, true)} />
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
                onClick={() => setActiveMenu(prevActiveMenu => !prevActiveMenu)}
              />
            </div>
            {
              (!homeClicked && !subjectClicked && !aboutClicked) && (
                <Welcome />
              )
            }
            {
              homeClicked && (
                <Home />
              )
            }
            {
              subjectClicked && (
                <Subject />
              )
            }
            {
              homeClicked && (
                <About />
              )
            }
            
          </main>
        </div>
        <div>
          <Routes>
            {/*Rotas de Navegação*/}
            <Route path="/" element={<Welcome />}  />
            <Route path="/home" element={<Home />} />
            <Route path="/subject" element={<Subject />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
