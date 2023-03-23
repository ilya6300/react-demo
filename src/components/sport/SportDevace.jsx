import React, { useState } from "react";
import RadioButtonCategory from "./RadioButtonCategory";
import SportDevaceTitle from "./SportDevaceTitle";
import "./UI/css/SportDevaceContainer.css";
import SportPrograms from "./SportPrograms";

const SportDevace = () => {
  const [componentProgram, setComponentPropgram] = useState(false);

  const hendleSportComponent = (componentProgram) => {
    setComponentPropgram(componentProgram);
  };

  return (
    <div className="sport-devace-container">
      <SportDevaceTitle title="Спорт программа на выбор от Илюхи" />
      <RadioButtonCategory onChange={hendleSportComponent} />
      {(componentProgram) ? (
        <SportPrograms componentProgram={componentProgram} />
      ) : (
        <h2>Выберите программу</h2>
      )}
    </div>
  );
};

export default SportDevace;
