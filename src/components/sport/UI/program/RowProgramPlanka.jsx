import React, { useState, useEffect } from "react";
import ModalBlockSport from "../ModalBlockSport";
// import "./UI/program/program.css";

const RowProgramPlanka = ({ collection, plancaTitle }) => {
  const [visibleSport, setVisibleSport] = useState(false);
  const arrPlanca = collection;
  const [arrIndex, setAppIndex] = useState(0);
  const [plancaAllTime, setPlancaAllTime] = useState(
    arrPlanca.reduce((acc, num) => acc + num, 0)
  );
  const [plancaAmountonce, setplAncaAmountonce] = useState(
    arrPlanca.length - 1
  );
  const [plancaAmounttime, setplAncaAmounttime] = useState(arrPlanca[arrIndex]);
  const [image, setImage] = useState(
    "https://cdn-icons-png.flaticon.com/512/5855/5855520.png"
  );

  useEffect(() => {
    setAppIndex((i) => i + 1);
  }, [setAppIndex]);

  //
  const plancaF = () => {
    if (plancaAmountonce > 0) {
      let onceSec = plancaAmounttime;
      let allSec = plancaAllTime;
      const onceTimerID = setInterval(() => {
        setVisibleSport(true);
        onceSec--;
        allSec--;
        setplAncaAmounttime((prev) => (prev = onceSec));
        setPlancaAllTime(allSec);
        if (onceSec <= 0) {
          setplAncaAmountonce(plancaAmountonce - 1);
          setAppIndex((i) => i + 1);
          setplAncaAmounttime(arrPlanca[arrIndex]);
          clearInterval(onceTimerID);
          setVisibleSport(false);
          console.log("plancaAllTime", plancaAllTime);
          console.log("arrPlanca[arrIndex]", arrPlanca[arrIndex]);
          if (arrPlanca[arrIndex] === 0) {
            setImage("https://cdn-icons-png.flaticon.com/512/7569/7569914.png");
          }
        }
      }, 1000);
    }
  };

  return (
    <div className="program-row-container">
      <span className="program-row-text-total program-row-planca">
        {plancaTitle} {plancaAmountonce} подхода, текущий {plancaAmounttime} сек
      </span>
      {/* <button
        className="program-row-btn"
        onClick={plancaF}
        onTouchStart={plancaF}
      > */}
        <img
          onClick={plancaF}
          className="program-row-img"
          alt="Ввод"
          src={image}
        />
      {/* </button> */}
      <span className="program-row-text-balance program-row-planca_all">
        осталось: {plancaAllTime} сек.
      </span>
      {/* Модальное окно */}
      <ModalBlockSport visible={visibleSport} setVisible={setVisibleSport}>
        <h2 className="modal-window-timer-h2">Держи планку:</h2>
        <p className="modal-window-timer-count">{plancaAmounttime}</p>
      </ModalBlockSport>
    </div>
  );
};

export default RowProgramPlanka;
