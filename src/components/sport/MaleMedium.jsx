import React from "react";
import RowProgram from "./UI/program/RowProgram";
import RowProgramPlanka from "./UI/program/RowProgramPlanka";

const MaleMedium = () => {
  return (
    <div>
      {/* Пресс */}
      <RowProgram training={"Пресс"} total={"150"} balance={150} />
      {/* Отжимание */}
      <RowProgram training={"Отжимание"} total={"120"} balance={120} />
      {/* Планка полная*/}
      <RowProgramPlanka collection={[60, 60, 0]} plancaTitle="Планка полная" />
      {/* Планка на логтях*/}
      <RowProgramPlanka collection={[60, 0]} plancaTitle="Планка на логтях" />
      {/* Кистевой эспандер */}
      <RowProgram training={"Кистевой эспандер"} total={"250"} balance={250} />
    </div>
  );
};

export default MaleMedium;
