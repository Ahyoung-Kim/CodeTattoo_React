import React from 'react';
import { useNavigate } from 'react-router-dom';

const Entry = () => {
  const navigate = useNavigate();

  const goLogin = () => {
    navigate('/login');
  }
  const goRegister = () => {
    navigate('/register')
  }

  return (
    <>
      <button type="button" onClick={goLogin}>로그인</button>
      <button type="button" onClick={goRegister}>회원가입</button>
    </>
  );
};

export default Entry;