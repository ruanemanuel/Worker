import { HomeIcon } from "lucide-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { FiSettings } from "react-icons/fi";

export default function Screen() {
  return (
    <div className="h-screen bg-zinc-800">
      <BrowserRouter>
        <div className="flex text-white">
          {/*Sidebar*/}
          <aside className="p-6 flex w-48 h-screen bg-zinc-900">
            <button
              className="absolute top-3 text-xl p-2"
              style={{
                cursor: "pointer",
                background: "#68696d",
                borderRadius: "50%",
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
          {/*Main*/}
          <main className="flex">main</main>
        </div>
        <div>
          <Routes>
            {/*Routes*/}
            <Route path="/" />
            <Route path="/home" element="Home" />
            <Route path="/subject" element="Subject" />
            <Route path="/about" element="About" />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
