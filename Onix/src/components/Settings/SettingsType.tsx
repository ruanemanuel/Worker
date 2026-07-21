import { ComponentType, ReactElement } from "react";

enum SettingsActionTypes {
  toggle = "toggle",
  selection = "selection",
}
interface SettingsType {
  name: string;
  description: string;
  typeAction: SettingsActionTypes;
}

const SettingsToggle = (): ReactElement => {
  return (
    <div className="flex border-2 dark:border-zinc-500 border-zinc-700 shadow-2xl shadow-zinc-800 dark:shadow-zinc-200">
      <input type="checkbox" className="size-4" />
    </div>
  );
};
const SettingsSelection = (): ReactElement => {
  return (
    <div className="flex border-2 dark:border-zinc-500 border-zinc-700 shadow-2xl shadow-zinc-800 dark:shadow-zinc-200">
      <select name="">
        <option>Na lateral esquerda</option>
        <option>No centro superior</option>
      </select>
    </div>
  );
};

const SettingsActionMap: Record<SettingsActionTypes, ComponentType> = {
  toggle: SettingsToggle,
  selection: SettingsSelection,
};

const SettingsType = ({
  name,
  description,
  typeAction,
}: SettingsType): ReactElement => {
  const SettingsAction: ComponentType = SettingsActionMap[typeAction];

  return (
    <div className="flex">
      <div className="flex flex-col gap-1 " id="settingsTypeContainer">
        <h4 className="text-xl font-bold ml-4"> {name} </h4>
        <p>{description}</p>
      </div>
      <div className="ml-8">
        <SettingsAction />
      </div>
        
    </div>
  );
};

export { SettingsType, SettingsActionTypes };
