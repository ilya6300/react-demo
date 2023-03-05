import React, { useState } from "react";

const History = (props) => {
  const results = props.data.map((result) => {
    return <button key={result}>{result}</button>;
  });
  return <div>{results}</div>;
};
export default History;
