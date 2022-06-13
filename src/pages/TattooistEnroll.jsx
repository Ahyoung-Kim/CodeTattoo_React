import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { 
  EnrollDiv,
  EnrollBox,
  EnrollUl,
  EnrollText,
  EnrollLi,
  EnrollLabel,
  EnrollInput,
  EnrollBtn
} from '../styledComponents';

const TattooistEnroll = ({ apiUrl }) => {
  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();
  const input4 = useRef();
  const input5 = useRef();
  const input6 = useRef();

  const [inputs, setInputs] = useState({
    user_id: '',
    nickname: '',
    specialize: ''
  });
  const [office, setOffice] = useState({
    name: '',
    location: '',
    contact: ''
  })

  const { user_id, nickname, specialize } = inputs;
  const { name, location, contact } = office;

  useEffect(()=>{
    input1.current.focus();
  }, []);
  
  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    })
  }
  const onOffice = (e) => {
    const { value, name } = e.target;
    setOffice({
      ...office,
      [name]: value
    })
  }

  const onKeyUp = (e) => {
    const id = e.target.id;
    if(e.key === 'Enter' || e.key === 'ArrowDown'){
      if(id == 1){
        input2.current.focus();
      } else if (id == 2){
        input3.current.focus();
      } else if (id == 3){
        input4.current.focus();
      } else if (id == 4){
        input5.current.focus();
      } else if (id == 5){
        input6.current.focus();
      }
    }
  }

  const enrollment = async() => {
    const body = {
      user_id: user_id,
      nickname: nickname,
      specialize: specialize,
      office: office
    }

    const res = await axios.post(`${apiUrl}/tattooist/enrollment`, body);
    console.log('response: ', res);
  }
  const navigate = useNavigate();

  const onSubmit = () => {
    console.log('info: ', inputs);
    console.log('office: ', office);
    enrollment();
    navigate('/');
  }

  return (
    <>
      <EnrollDiv>

        <EnrollBox>
          <EnrollUl>
            <EnrollText>Information</EnrollText>

            <EnrollLi>
              <EnrollLabel> 닉네임
                <EnrollInput 
                  type="text"
                  name="nickname"
                  value={nickname}
                  onChange={onChange}
                  id="1"
                  ref={input1}
                  onKeyUp={onKeyUp}
                  autoComplete='nope'
                />
              </EnrollLabel>
            </EnrollLi>

            <EnrollLi>
              <EnrollLabel> ID
                <EnrollInput 
                  type="text"
                  name="user_id"
                  value={user_id}
                  onChange={onChange}
                  id="2"
                  ref={input2}
                  onKeyUp={onKeyUp}
                  autoComplete='nope'
                />
              </EnrollLabel>
            </EnrollLi>

            <EnrollLi>
              <EnrollLabel> Specialize
                <EnrollInput 
                  type="text"
                  name="specialize"
                  value={specialize}
                  onChange={onChange}
                  id="3"
                  ref={input3}
                  onKeyUp={onKeyUp}
                  autoComplete='nope'
                />
              </EnrollLabel>
            </EnrollLi>
          </EnrollUl>

          <EnrollUl>
            <EnrollText>Office</EnrollText>

            <EnrollLi>
              <EnrollLabel> 작업실명
                <EnrollInput 
                  type="text"
                  name="name"
                  value={name}
                  onChange={onOffice}
                  id="4"
                  ref={input4}
                  onKeyUp={onKeyUp}
                  autoComplete='nope'
                />
              </EnrollLabel>
            </EnrollLi>

            <EnrollLi>
              <EnrollLabel> 주소
                <EnrollInput 
                  type="text"
                  name="location"
                  value={location}
                  onChange={onOffice}
                  id="5"
                  ref={input5}
                  onKeyUp={onKeyUp}
                  autoComplete='nope'
                />
              </EnrollLabel>
            </EnrollLi>

            <EnrollLi>
              <EnrollLabel> Contact
                <EnrollInput 
                  type="text"
                  name="contact"
                  value={contact}
                  onChange={onOffice}
                  id="6"
                  ref={input6}
                  autoComplete='nope'
                />
              </EnrollLabel>
            </EnrollLi>
          </EnrollUl>

          <EnrollBtn onClick={onSubmit}>
            <span>Enroll</span>
          </EnrollBtn>
        </EnrollBox>

      </EnrollDiv>
    </>
  );
};

export default TattooistEnroll;