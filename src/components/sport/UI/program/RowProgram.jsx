import React, { useState } from "react";

const RowProgram = ({ balance, total, training }) => {
  const [pressBalanceComponent, setPressBalanceComponent] = useState(balance);
  const [pressInputComponent, setPressInputComponent] = useState("");

  const [image, setImage] = useState(
    "https://cdn-icons-png.flaticon.com/512/5855/5855520.png"
  );

  const pressF = () => {
    console.log(pressBalanceComponent)
    console.log(balance)
    if (pressBalanceComponent - pressInputComponent > 0) {
      setPressBalanceComponent(pressBalanceComponent - pressInputComponent);
    } else {
      setPressBalanceComponent(0);
      setImage("https://cdn-icons-png.flaticon.com/512/7569/7569914.png");
    }
    setPressInputComponent("");
  };

  return (
    <div className="program-row-container">
      <span className="program-row-text-total">
        {training} всего: {total}
      </span>
      <input
        type="number"
        className="program-row-input"
        value={pressInputComponent}
        onChange={(e) => setPressInputComponent(e.target.value)}
      />
      <img
        className="program-row-img"
        alt="Ввод"
        src={image}
        onClick={pressF}
      />
      <span className="program-row-text-balance">
        осталось: {pressBalanceComponent}
      </span>
    </div>
  );
};

export default RowProgram;
