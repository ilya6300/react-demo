import React from 'react'
import RowProgram from "./UI/program/RowProgram";
import RowProgramPlanka from "./UI/program/RowProgramPlanka";

const MaleHero = () => {
  return (
    <div>
      {/* Пресс */}
      <RowProgram training={"Пресс"} total={"350"} balance={350} />
      {/* Отжимание на кулаках */}
      <RowProgram
        training={"Отжимание на кулаках"}
        total={"250"}
        balance={250}
      />
      {/* Планка полная*/}
      <RowProgramPlanka collection={[120, 120, 0]} plancaTitle="Планка полная" />
      {/* Планка на логтях*/}
      <RowProgramPlanka
        collection={[120, 120, 0]}
        plancaTitle="Планка на логтях"
      />
      {/* Кистевой эспандер */}
      <RowProgram
        training={"Кистевой эспандер"}
        total={"600"}
        balance={600}
      />
    </div>
  )
}

export default MaleHero