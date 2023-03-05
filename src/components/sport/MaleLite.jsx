import React from "react";
import "./UI/program/program.css";
import RowProgram from "./UI/program/RowProgram";
import RowProgramPlanka from "./UI/program/RowProgramPlanka";

const MaleLite = () => {

  return (
    <div className="pogram-rows-container">
      {/* Пресс */}
      <RowProgram training={"Пресс"} total={"100"} balance={100} />
      {/* Отжимание */}
      <RowProgram training={"Отжимание"} total={"80"} balance={80} />
      {/* Планка полная*/}
      <RowProgramPlanka collection={[60, 40, 0]} plancaTitle="Планка полная" />
      {/* Планка на логтях*/}
      <RowProgramPlanka collection={[30, 0]} plancaTitle="Планка на логтях" />
    </div>
  );
};

export default MaleLite;
