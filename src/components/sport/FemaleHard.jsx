import React from "react";
import RowProgram from "./UI/program/RowProgram";
import RowProgramPlanka from "./UI/program/RowProgramPlanka";

const FemaleHard = () => {
  return (
    <div className="pogram-rows-container">
      {/* Растяжка */}
      <RowProgramPlanka collection={[60, 120, 0]} plancaTitle="Растяжка" />
      {/* Планка полная */}
      <RowProgramPlanka
        collection={[60, 120, 60, 0]}
        plancaTitle="Планка полная"
      />
      {/* Планка на логтях */}
      <RowProgramPlanka
        collection={[40, 40, 0]}
        plancaTitle="Планка на логтях"
      />
      {/* Пресс */}
      <RowProgram training={"Пресс"} total={"250"} balance={250} />
    </div>
  );
};

export default FemaleHard;
