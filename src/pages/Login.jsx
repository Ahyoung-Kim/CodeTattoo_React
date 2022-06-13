import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { 
  LoginSection,
  LoginTextDiv,
  LoginBox,
  LoginInputDiv,
  LoginInput,
  LoginBtn 
} from '../styledComponents';

const Login = ({ apiUrl }) => {
  const emailInput = useRef();
  const pwdInput = useRef();
  const [info, setInfo] = useState({
    email: '',
    pwd: ''
  })

  const { email, pwd } = info;

  useEffect(()=>{
    emailInput.current.focus();
  }, []);

  const onChange = (e) => {
    const {value, name} = e.target;
    setInfo({
      ...info,
      [name]: value,
    });
  }

  const onKeyUp = (e) => {
    if(e.key === 'Enter' || e.key === 'ArrowDown'){
      pwdInput.current.focus();
    }
  }

  const submitLogin = async() => {
    const body = {
      email: email,
      pwd: pwd
    }
    const res = await axios.post(`${apiUrl}/login`, body)
    console.log(res);
  }

  const navigate = useNavigate();
  const onSubmit = () => {
    submitLogin();
    navigate('/');
  }

  return (
    <>
      <LoginSection>
        <LoginTextDiv>
          <span>Welcome! 로그인을 해주세요.</span>
        </LoginTextDiv>

        <LoginBox>
          <LoginInputDiv>
            <LoginInput
              type="email"
              placeholder='email을 입력해주세요...'
              value={email}
              name="email"
              onChange={onChange}
              ref={emailInput}
              onKeyUp={onKeyUp}
              autoComplete='nope'
             />
          </LoginInputDiv>

          <LoginInputDiv>
            <LoginInput
              type="password"
              placeholder='비밀번호를 입력해주세요...'
              value={pwd}
              name="pwd"
              onChange={onChange}
              ref={pwdInput}
              autoComplete='nope'
            />
          </LoginInputDiv>
        </LoginBox>

        <LoginBtn onClick={onSubmit}>
          <span>Login</span>
        </LoginBtn>
      </LoginSection>
    </>
  );
};

export default Login;