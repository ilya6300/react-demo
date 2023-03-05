import React from "react";

const ModalBlockSport = ({ children, visible, setVisibleSport }) => {
const visibleClassesSport = ['modal-window-timer']
if (visible) {
    visibleClassesSport.push('active-sport') 
}
  return <div className={visibleClassesSport.join(' ')}>{children}</div>;
};

export default ModalBlockSport;
