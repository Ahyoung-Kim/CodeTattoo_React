import React from 'react';
import ImgLoad from './ImgLoad';
import ImgList from './ImgList';
import { useNavigate } from 'react-router-dom';

import { 
  DraftsListDiv,
  DraftsBtn,
} from '../styledComponents';

const TattoistDrafts = ({ apiUrl }) => {
  const navigate = useNavigate();
  const goDraft = () => {
    navigate('/tattooist/img_load');
  }

  return (
    <>
      <DraftsListDiv>
        <DraftsBtn onClick={goDraft}>
          도안 등록
        </DraftsBtn>

        <ImgList />
      </DraftsListDiv>
    </>
  );
};

export default TattoistDrafts;