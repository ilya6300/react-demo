import React from "react";
import RowProgram from "./UI/program/RowProgram";
import RowProgramPlanka from "./UI/program/RowProgramPlanka";

const MaleHard = () => {
  return (
    <div>
      {/* Пресс */}
      <RowProgram training={"Пресс"} total={"240"} balance={240} />
      {/* Отжимание на кулаках */}
      <RowProgram
        training={"Отжимание на кулаках"}
        total={"180"}
        balance={180}
      />
      {/* Планка полная*/}
      <RowProgramPlanka collection={[90, 90, 0]} plancaTitle="Планка полная" />
      {/* Планка на логтях*/}
      <RowProgramPlanka
        collection={[90, 90, 0]}
        plancaTitle="Планка на логтях"
      />
      {/* Кистевой эспандер */}
      <RowProgram
        training={"Кистевой эспандер"}
        total={"400"}
        balance={400}
      />
    </div>
  );
};

export default MaleHard;
