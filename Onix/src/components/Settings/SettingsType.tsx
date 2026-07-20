import { ReactElement } from "react";

interface SettingsType {
  title: string;
  description: string;
}

const SettingsType = ({ title, description }: SettingsType): ReactElement => {
  return (
    <div className="flex">
      <div className="flex flex-col">
        <h4> { title } </h4>
        <p> { description } </p>
      </div>
    </div>
  );
};

export default SettingsType;
