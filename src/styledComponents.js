import styled from 'styled-components';

// HEADER
export const HeaderDiv = styled.header`
  height: 180px;
  background-color: #F6F6F6;
`;

export const HeaderInner = styled.div`
  margin: 0 auto;
  height: 100%;
  width: 1200px;
  position: relative;
`;

export const HeaderTitle = styled.div`
  width: max-content;
  font-size: 48px;
  font-weight: bold;
  position: absolute;
  left: 0;
  top: 60px;
  text-shadow: 10px 10px 10px  #b7b7b7;
  cursor: pointer;
`;

export const HeaderSubMenu = styled.div`
  display: flex;
  position: absolute;
  top: 10px;
  right: 0;
`;

export const SubMenuBtn = styled.div`
  box-sizing: border-box;
  background-color: white;
  width: 75px;
  height: 30px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #484848;
  color: #F6F6F6;
  font-weight: bold;
  cursor: pointer;
  margin: 5px;

  transition: .45s;
`;

export const HoverBtnStyle = {
  backgroundColor: '#F6F6F6',
  color: '#484848',
  border: '3px solid #484848'
};