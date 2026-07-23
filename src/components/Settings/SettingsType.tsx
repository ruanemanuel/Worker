import type { ReactElement } from "react";

export function SettingToggle(): ReactElement {
  return (
    <input
      type="checkbox"
      className="rounded-full dark:bg-zinc-700 bg-zinc-500"
    />
  );
}

interface SettingSelectionProps {
  options: string[];
}

export function SettingSelection({ options }: SettingSelectionProps): ReactElement {
  return (
    <select className="w-auto dark:bg-zinc-600 bg-zinc-500 dark:border-zinc-300 border-zinc-700 font-bold items-center text-center h-30 rounded-[10px]">
      {options.map((option: string) => {
        return (
          <option className="font-bold" value={option} key={option}>
            {option}
          </option>
        );
      })}
    </select>
  );
}

interface SettingsTypeProps {
  name: string;
  description: string;
  type: ReactElement;
}



export function SettingsType({name, description, type}: SettingsTypeProps) {
  return (
    <div className="flex gap-3 border-2 dark:border-zinc-600 border-zinc-700 w-120 h-30">
        <div id="settingsTypeContainer">
          <h4 className="font-bold ml-5 text-xl">{name}</h4>
          <p className="mr-1">{description}</p>
        </div>
        <div>
          {type}
        </div>
      </div>
  )
}

