import { ReactNode } from "react";
import { SettingSelection, SettingToggle } from "./SettingsType";

interface SettingType{
    Toggle: ReactNode,
    Selection: ReactNode
}



const SettingType = {
    Toggle: SettingToggle,
    Selection: SettingSelection
}


export default SettingType