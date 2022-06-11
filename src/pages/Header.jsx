import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Btn from './Btn';
import { HeaderDiv, HeaderInner, HeaderSubMenu, HeaderTitle } from '../styledComponents';

const Header = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  }

  const goLogin = () => {
    navigate('/login');
  }
  const goRegister = () => {
    navigate('/register')
  }

  return (
    <>
      <HeaderDiv>
        <HeaderInner>
          <HeaderTitle>
            <span onClick={goHome}>Code Tattoo</span>
          </HeaderTitle>

          <HeaderSubMenu>
            <Btn text={'Login'} onClick={goLogin} />
            <Btn text={'Sign up'} onClick={goRegister} />
          </HeaderSubMenu>
        </HeaderInner>
      </HeaderDiv>
    </>
  );
};

export default Header;