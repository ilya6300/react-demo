import React from "react";
import RowProgram from "./UI/program/RowProgram";
import RowProgramPlanka from "./UI/program/RowProgramPlanka";

const FemaleMedium = () => {
  return (
    <div className="pogram-rows-container">
      {/* Растяжка */}
      <RowProgramPlanka collection={[30, 30, 0]} plancaTitle="Растяжка" />
      {/* Планка */}
      <RowProgramPlanka collection={[60, 60, 0]} plancaTitle="Планка" />
      {/* Пресс */}
      <RowProgram training={"Пресс"} total={"150"} balance={150} />
    </div>
  );
};

export default FemaleMedium;
