import type { ReactElement } from "react";
import SettingType from "../components/Settings/types"

import Settings from "../components/Settings/index";




export default function SettingsView(): ReactElement  {
  return (
    <div>
      <div className="ml-5">
        <h1 className="text-5xl font-bold">Configurações</h1>
      </div>
      
      {/* Configurações */}
      <div className="mt-15 grid grid-rows-3">
        <Settings.Type name="Posição da Barra Lateral" description="Escolha seu estilo de configuração da barra lateral" type={<SettingType.Selection options={["Lateral Esquerda", "Centro Superior"]} />} />
      </div>
    </div>
  )
}
