import React, { useState } from "react";
import SportRadioButton from "./UI/Radio_button/SportRadioButton";
import "../sport/UI/css/SportDevaceContainer.css";


const RadioButtonCategory = ({onChange}) => {

  const [conponentRadioGender, setComponentRadioGender] = useState("");

  const selectGender = (e) => {
    setComponentRadioGender(e.target.value)
    const levelBtn = document.getElementsByName('level');
    levelBtn.forEach(elLevelBtn => {
      elLevelBtn.checked = false;
      onChange(false)
    });

  }
   const hendleSportComponent = (e) => {

    onChange(conponentRadioGender + e.target.value)

   }


  return (
    <div className="radio-btn-container">
      <div className="sport-radio-btn-group">
        <SportRadioButton
          name="gender"
          value='m-'
          onChange={selectGender}
          valuebtn="Male"
        />
        <SportRadioButton
          name="gender"
          value='f-'
          onChange={selectGender}
          valuebtn="Female"
        />
      </div>
      <div className="sport-radio-btn-group">
        <SportRadioButton
          value="lite"
          name="level"
          onChange={hendleSportComponent}
          valuebtn="Lite"
        />
        <SportRadioButton
          value="medium"
          name="level"
          onChange={hendleSportComponent}
          valuebtn="Medium"
        />
        <SportRadioButton
          value="strong"
          name="level"
          onChange={hendleSportComponent}
          valuebtn="Strong"
        />
        <SportRadioButton
          value="hero"
          name="level"
          onChange={hendleSportComponent}
          valuebtn="Super-Hero"
        />
      </div>

    </div>
  );
};

export default RadioButtonCategory;
