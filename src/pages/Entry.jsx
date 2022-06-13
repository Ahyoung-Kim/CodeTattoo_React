import React from 'react';
import { 
  MainDiv,
  BtnBox,
  ContentBtn,
} from '../styledComponents';
import { useNavigate } from 'react-router-dom';

const Entry = () => {
  const navigate = useNavigate();

  const goEnroll = () => {
    navigate('/tattooist_enrollment');
  }

  const goLogin = () => {
    navigate('/login');
  }
  const goRegister = () => {
    navigate('/register')
  }
  
  return (
    <>
      <MainDiv>

        <BtnBox>
          <ContentBtn onClick={goEnroll}>Tattooist 등록</ContentBtn>
          <ContentBtn onClick={goLogin}>User 로그인</ContentBtn>
          <ContentBtn onClick={goRegister}>회원가입</ContentBtn>
        </BtnBox>

      </MainDiv>
    </>
  );
};

export default Entry;