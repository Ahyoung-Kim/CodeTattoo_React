import styled from 'styled-components';

// HEADER
export const HeaderDiv = styled.header`
  height: 150px;
  background-color: #F6F6F6;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderInner = styled.div`
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
  top: 45px;
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
  border: '3px solid #484848',
};


export const LoginSection = styled.div`
  background-color:#c9c9c9;
  width: 700px;
  margin: 150px auto 222px;
  border-radius: 5px;
  overflow: hidden;
`;

export const LoginTextDiv = styled.div`
  background-color:#484848;
  color:#F6F6F6;
  font-weight: bold;
  height: 50px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginBox = styled.div`
  width: max-content;
  margin: 50px auto;
`;

export const LoginInputDiv = styled.div`
  border-radius: 7px;
  margin-bottom: 20px;
`;

export const LoginInput = styled.input`
  width: 450px;
  height: 35px;
  border-radius: 7px;
  border-color: rgba(0, 0, 0, 0);
`

export const LoginBtn = styled.div`
  background-color: #000;
  margin: 0 auto;
  border-radius: 10px;
  height: 50px;
  width: 400px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
  color:#F6F6F6;
  cursor: pointer;
`;

// Entry
export const EntrySection = styled.section`
  display: flex;
`;

export const CategoryDiv = styled.div`
  width: 250px;
  border-right: .1px solid #484848;
`

export const CategoryBox = styled.div`
  width: 150px;
  margin: 10px auto 40px;
  padding: 0 20px;
`;

export const CategoryText = styled.p`
font-size: 20px;
padding: 10px;
margin-top: 30px;
border-bottom: .1px solid #484848;
`;

export const CategoryUl = styled.ul`
margin: 30px auto;
`;

export const CategorySubText = styled.p`
font-size: 18px;
border-bottom: .1px solid rgba(0, 0, 0, 0.3);
`;

export const CategoryLi = styled.li`
margin: 7px;
cursor: pointer;
`;

// Main Content
export const MainDiv = styled.div`
margin: 0 auto;
padding: 212px 0;
`;

export const BtnBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

export const ContentBtn = styled.div`
background-color: #000;
color: white;
width: 300px;
height: 200px;
display: flex;
justify-content: center;
align-items: center;
font-size: 24px;
font-weight: bold;
margin: 50px;
border-radius: 10px;
cursor: pointer;
`;

// Enroll
export const EnrollDiv = styled.div`
margin: 0 auto;
  padding: 60px;
`;

export const EnrollBox = styled.div`
  background-color: #fbfbfb;
  box-shadow: 5px 10px 10px 0 rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  width: 900px;
  margin: 0 auto;
  padding: 0 0 50px;
`;

export const EnrollUl = styled.ul`
  margin-bottom: 50px;
`;

export const EnrollText = styled.p`
  font-size: 28px;
  font-weight: bold;
  color: #484848;
  padding: 10px 20px;
  border-bottom: 0.1px solid #b0b0b0;
  margin: 20px 0;
`;

export const EnrollLi = styled.li`
  margin: 40px;
  position: relative;
  height: 30px;
`;

export const EnrollLabel = styled.label`
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
`;

export const EnrollInput = styled.input`
  border-color: rgba(0, 0, 0, 0.1);
  width: 300px;
  height: 30px;
  position:absolute;
  right: 420px;
`;

export const EnrollBtn = styled.div`
  margin: 0 auto;
  background-color: #000;
  color: white;
  font-weight: bold;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 40px;
  border-radius: 7px;
  cursor: pointer;
`;


//  FOOTER
export const FooterDiv = styled.footer`
height: 130px;
width: 100%;
color: #F6F6F6;
background-color: #484848;
`;

export const FooterText = styled.p`
text-align: center;
padding: 30px 0 0;
`;