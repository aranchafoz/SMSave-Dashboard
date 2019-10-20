import React from 'react';
import { TopbarContainer } from './topbar-styles';

import smsaveSimpleSvg from '../../assets/icons/smsave_simple.svg';
import smsaveLabelSvg from '../../assets/icons/smsave_label.svg';
import userPng from '../../assets/icons/user.png';


const Topbar = ({className}) => {
  return (
    <TopbarContainer {...{className}}>
      <div className="logo">
        <img className="icon" src={smsaveSimpleSvg} alt="SMSave Icon" />
        <img className="label" src={smsaveLabelSvg} alt="SMSave Label" />
      </div>
      <div className="user">
        <img className="label" src={userPng} alt="User" />
        <span>Álvaro Muñoz</span>
      </div>
    </TopbarContainer>
  );
};

export default Topbar;