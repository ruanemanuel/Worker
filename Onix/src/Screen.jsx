import { IoMdMenu as Menu } from "react-icons/io";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { FiSettings, FiHome } from "react-icons/fi";
import { LuMessageCircleQuestion as LuQuestion } from "react-icons/lu";
import { MdOutlineSchool } from "react-icons/md"
import Welcome from "./pages/Welcome";
import React, { useState } from "react";

export default function Screen() {
  const [activeMenu, setActiveMenu] = useState(true);

  return (
    <div className="h-screen bg-zinc-800">
      <BrowserRouter>
        <div className="flex text-white space-x-4">
          {/*Sidebar*/}
          {activeMenu ? (
            <aside className="p-6 flex w-40 h-screen bg-zinc-900 justify-center">
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
              {/*Navbar*/}
              <nav className="flex flex-col gap-3 mt-8">
                <button className="hover:bg-white/20 rounded-md p-2 pointer">
                  Início
                </button>
                <button className="hover:bg-white/20 rounded-md p-2 pointer">
                  Disciplinas
                </button>
                <button className="hover:bg-white/20 rounded-md p-2 pointer">
                  Sobre
                </button>
              </nav>
            </aside>
          ) : (
            <aside className="p-6 flex w-20 h-screen bg-zinc-900 justift-center">
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
              {/*Navbar*/}
              <nav className="flex flex-col gap-3 mt-8">
                <button className="hover:bg-white/20 rounded-md p-2 pointer">
                  <FiHome />
                </button>
                <button className="hover:bg-white/20 rounded-md p-2 pointer">
                  <MdOutlineSchool />
                </button>
                <button className="hover:bg-white/20 rounded-md p-2 pointer">
                  <LuQuestion />
                </button>
              </nav>
            </aside>
          )}

          {/*Main Window*/}
          <main className="flex ">
            <div className="space-x-2 flex mt-5">
              <Menu
                className="text-2xl bg-zinc-400 text-black rounded-xs pointer"
                onClick={() => setActiveMenu(activeMenu ? false : true)}
              />
            </div>
            <Welcome />
          </main>
        </div>
        <div>
          <Routes>
            {/*Routes*/}
            <Route path="/" element={<Welcome />} />
            <Route path="/home" element="Home" />
            <Route path="/subject" element="Subject" />
            <Route path="/about" element="About" />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
