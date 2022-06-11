import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = ({ apiUrl }) => {
  const nameInput = useRef();
  const emailInput = useRef();
  const pwdInput = useRef();
  const [info, setInfo] = useState({
    name: '',
    email: '',
    pwd: ''
  })

  const { name, email, pwd } = info;

  useEffect(()=>{
    nameInput.current.focus();
  }, []);

  const onChange = (e) => {
    const {value, name} = e.target;
    setInfo({
      ...info,
      [name]: value,
    });
  }

  const onKeyUp = (e) => {
    if(e.key === 'Enter'){
      if(e.target.name === 'name'){
        emailInput.current.focus();
      } else {
        pwdInput.current.focus();
      }
    }
  }

  const submitLogin = async() => {
    const body = {
      name: name,
      email: email,
      pwd: pwd
    }
    const res = await axios.post(`${apiUrl}/register`, body)
    console.log(res);
  }

  const navigate = useNavigate();
  const onSubmit = () => {
    submitLogin();
    navigate('/');
  }

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder='닉네임을 입력해주세요...'
          value={name}
          name="name"
          onChange={onChange}
          ref={nameInput}
          onKeyUp={onKeyUp}
         />
      </div>
      <div>
        <input
          type="email"
          placeholder='email을 입력해주세요...'
          value={email}
          name="email"
          onChange={onChange}
          ref={emailInput}
          onKeyUp={onKeyUp}
         />
      </div>
      <div>
        <input
          type="password"
          placeholder='비밀번호를 입력해주세요...'
          value={pwd}
          name="pwd"
          onChange={onChange}
          ref={pwdInput}
         />
      </div>
      <div>
        <button type="button" onClick={onSubmit}>회원가입</button>
      </div>
    </div>
  );
};

export default SignUp;