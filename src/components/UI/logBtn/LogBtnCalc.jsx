import React from 'react';
import classes from './CalcLogBtn.module.css';

const LogBtnCalc = ({children, ...props}) => {
  return (
    <div className={classes.calcLog}>
        {children}
    </div>
  );
};

export default LogBtnCalc;