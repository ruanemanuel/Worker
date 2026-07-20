import { Settings } from "lucide-react"

enum SettingsActionTypes{
    toggle,
    selection,
}



interface SettingsAction {
    type: SettingsActionTypes
}


const SettingsAction = ({ type }: SettingsAction) => {

    switch(type){
        case SettingsActionTypes.toggle:
            return (
                <>
                </>
            )
        case SettingsActionTypes.selection:
            return (
                <>
                </>
            )
    }


}

export default SettingsAction