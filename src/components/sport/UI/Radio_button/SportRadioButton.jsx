import React from "react";

const SportRadioButton = (props) => {


  return (
    <label><input style={{margin: '0 10px 8px 0'}} type='radio' name={props.name} value={props.value} onChange={props.onChange}/>{props.valuebtn}</label>
  )
};

export default SportRadioButton;
