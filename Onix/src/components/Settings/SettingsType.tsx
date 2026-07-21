import { Component, Profiler, ReactElement } from "react";

function SettingToggle() {
  return (
    <input
      type="checkbox"
      className="rounded-full dark:bg-zinc-700 bg-zinc-500"
    />
  );
}

interface SettingSelection {
  options: string[];
}

function SettingSelection({ options }: SettingSelection) {
  return (
    <select className="w-50 font-bold items-center h-30">
      {options.map((option) => {
        return <option className="font-bold whitespace-nowrap rounded-[5px]" value={option}>{option}</option>
      })
      }
    </select>
  );
}

interface SettingsTypeProps {
  name: string;
  description: string;
  type: ReactElement;
}

class SettingsType extends Component<SettingsTypeProps> {
  constructor(props: SettingsTypeProps) {
    super(props);
  }

  render() {
    const { name, description, type } = this.props;

    return (
      <div className="flex gap-3 border-2 dark:border-zinc-600 border-zinc-300 w-120 h-30">
        <div id="settingsTypeContainer">
          <h4 className="font-bold ml-5 text-xl">{name}</h4>
          <p>{description}</p>
        </div>
        <div className="">
          {type}
        </div>
        
      </div>
    );
  }
}
export { SettingsType, SettingSelection, SettingToggle };
