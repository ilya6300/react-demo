import React from "react";
import "./UI/program/program.css";
import RowProgram from "./UI/program/RowProgram";
import RowProgramPlanka from "./UI/program/RowProgramPlanka";

const FemaleLite = () => {
  return (
    <div className="pogram-rows-container">
      {/* Планка */}
      <RowProgramPlanka
      collection ={[30, 40, 0]}
      plancaTitle="Планка полная"
      />
      {/* Пресс */}
      <RowProgram
        training={"Пресс"}
        total={"100"}
        balance={100}
      />
    </div>
  );
};

export default FemaleLite;
