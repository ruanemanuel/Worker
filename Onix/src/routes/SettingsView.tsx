import { ReactElement } from "react";
import Settings from "../components/Settings/main";
import { SettingsActionTypes } from "../components/Settings/SettingsType";

const SettingsView = (): ReactElement => {
  return (
    <div>
      <div className="ml-5">
        <h1 className="text-5xl font-bold">Configurações</h1>
      </div>
      
      {/* Configurações */}
      <div className="mt-15 grid grid-rows-3">
        <Settings.Type name="Modo de Visualização da Barra Lateral" description="Escolha seu modo de visualização da barra lateral" typeAction={SettingsActionTypes.selection} />  
      </div>
    </div>
  );
};

export default SettingsView;
