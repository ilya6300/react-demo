import React, { useState } from "react";
import "../css/calc.css";
import LogBtnCalc from "./UI/logBtn/LogBtnCalc";
import History from "./History";

const Calc = (props) => {
  const [counts, setCounts] = useState("");
  const [memberCounts, setmemberCounts] = useState("0");
  const [result, setResult] = useState("");
  const [calculation, setCalculation] = useState("");
  let cut;

  // История
  const [history, setHistory] = useState([]);

  const expressions = /\+|-|\/|\*|\0|=| /;
  // const lastNumber = counts[counts.length - 1];

  //   const applyExpression = (calculation) => {
  //     setCounts(calculation);
  //     setResult(eval(counts));
  //   };
  //   const setCountsFunc = () => {
  //     console.log(counts);
  //   };

  // Кнопки от 0 до 9 в массиве

  //   const numberCalcCollection = Array.from(Array(10).keys())
  //     .reverse()
  //     .map((numberCalc) => {
  //       return (
  //         <button
  //           onClick={(e) => {
  //             if (counts !== "0" && counts.length < 9)
  //               setCounts(counts + e.target.innerHTML);
  //             else if (counts === "0" && counts.length < 9)
  //               setCounts(e.target.innerHTML);
  //             if (memberCounts !== "0" && memberCounts.length < 9)
  //               setmemberCounts(memberCounts + e.target.innerHTML);
  //             else if (memberCounts === "0" && memberCounts.length < 9)
  //               setmemberCounts(e.target.innerHTML);
  //           }}
  //           key={numberCalc}
  //           className="App-calc-btn"
  //         >
  //           {numberCalc}
  //         </button>
  //       );
  //     });

  const numberCalcCollection = [
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "*",
    "0",
    "C",
    "=",
    "/",
  ].map((numberCalc) => {
    return (
      <button
        key={numberCalc}
        className="App-calc-btn"
        onClick={(e) => {
          if (
            counts !== "0" &&
            counts.length < 9 &&
            e.target.textContent !== "C"
          )
            setCounts(counts + e.target.innerHTML);
          else if (
            counts === "0" &&
            counts.length < 9 &&
            e.target.textContent !== "C"
          )
            setCounts(e.target.innerHTML);
          if (
            memberCounts !== "0" &&
            memberCounts.length < 9 &&
            e.target.textContent !== "C"
          )
            setmemberCounts(memberCounts + e.target.innerHTML);
          else if (
            memberCounts === "0" &&
            memberCounts.length < 9 &&
            e.target.textContent !== "C"
          )
            setmemberCounts(e.target.innerHTML);
          // Арифметические действия
          if (
            e.target.textContent === "+" ||
            e.target.textContent === "-" ||
            e.target.textContent === "*" ||
            e.target.textContent === "/"
          ) {
            if (expressions.test(counts[counts.length - 1])) return;
            if (counts !== "0") setCounts(counts + e.target.textContent);
            else return;
            setCalculation((cut = eval(counts)));
            setResult(String(cut).slice(0, 6));
            setmemberCounts("0");
            console.log("Ща посчитаем!");
          } else if (e.target.textContent === "=") {
            if (expressions.test(counts[counts.length - 1])) return;
            if (counts !== "0") setCounts(counts + e.target.textContent);
            else return;
            setCalculation((cut = eval(counts)))
            setResult(String(cut).slice(0, 6))

            setHistory(
              history.concat(String(cut).slice(0, 6)),
              history.forEach(e => {
                console.log(e)
              })
              )
            setmemberCounts("0");
          }
          // (console.log('e.target.textContent - ' + e.target.textContent))
          if (e.target.textContent === "C") {
            setCounts("");
            setResult("");
            setmemberCounts("0");
          }
        }}
      >
        {numberCalc}
      </button>
    );
  });

  return (
    <div className="App-calc-container">
      <h1 className="App-calc-title">Calculator Pavlov</h1>
      <div className="App-calc-display">
        <span
          className="App-calc-display-text-counts"
          style={{
            display: "block",
            height: "25px",
            fontSize: "20px",
          }}
        >
          {counts}
        </span>
        <div className="App-calc-display-flex-result">
          {memberCounts}
          <span>{result}</span>
        </div>
      </div>
      <div className="App-calc-btn-container">
        <div className="App-calc-btn-container">{numberCalcCollection}</div>
        <LogBtnCalc>{history}</LogBtnCalc>
      </div>
    </div>
  );
};

export default Calc;
