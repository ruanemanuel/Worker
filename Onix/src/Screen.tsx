import { IoMdMenu as Menu } from "react-icons/io";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import { FiSettings as Configurations } from "react-icons/fi";

import HomeView from "./routes/HomeView";
import SubjectView from "./routes/SubjectView";
import SettingsView from "./routes/SettingsView";
import { ReactElement, useState } from "react";
import Sidebar from "./components/Sidebar/index";
import Navbar from "./components/Navbar/index";
import Main from "./components/Main/index";
import Footer from "./components/Footer/index";


type State = boolean;

export default function Screen(): ReactElement {
  const [activeMenu, setActiveMenu] = useState<State>(true);

  return (
    <div className="h-screen">
      <BrowserRouter>
        <div className="flex dark:text-white text-black space-x-4">
          {/* Barra Lateral */}
          {activeMenu ? (
            <Sidebar.Root width={35} padding={4}>
              {/* Barra de Navegação */}
              <Navbar.Root>
                <Sidebar.Icon
                  icon={
                    <Configurations
                      className="text-4xl p-1 text-white w-10 justify-center text-center ml-7 border-[#68696d] border hover:bg-white/20 transition duration-200 rounded-[5px] pointer"
                      
                    />
                  }
                  page="settings"
                />
                <hr className="text-zinc-600/60 space-y-0 border-2 rounded-xs" />
                <Navbar.Tab title="Início" namePage="" />
                <hr className="text-zinc-600/60 space-y-0 border-2 rounded-xs" />
                <Navbar.Tab title="Disciplinas" namePage="subject" />
                <hr className="text-zinc-600/60 space-y-0 border-2 rounded-xs" />
              </Navbar.Root>
            </Sidebar.Root>
          ) : (
            <Sidebar.Root width={0} padding={0}></Sidebar.Root>
          )}

          {/* Tela Inicial */}
          <Main.Root>
            <div>
              <Main.Icon
                icon={
                  <Menu
                    className="dark:border-zinc-400 size-8 text-black dark:text-zinc-400 rounded-xs pointer border-zinc-800 hover:bg-black/10 dark:hover:bg-white/10 transition duration-250"
                    onClick={() =>
                      setActiveMenu((prevActiveMenu) => !prevActiveMenu)
                    }
                  />
                }
              />
            </div>
            <Routes>
              {/* Rotas de Navegação */}
              <Route path="/" element={<HomeView />} />
              <Route path="/subject" element={<SubjectView />} />
              <Route path="/settings" element={<SettingsView />} />
            </Routes>
          </Main.Root>
        </div>
        <Footer.Root>
          <Footer.Content />
        </Footer.Root>
      </BrowserRouter>
    </div>
  );
}
