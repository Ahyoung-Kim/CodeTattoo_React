import React from 'react';

import { 
  DraftMainDiv,
  CategoryTitle,
  DraftMainBox,
  DraftImgBox,
  DraftImg,
  DraftImgInfo,
  DraftTattooistDiv,
  DraftImgTitle 
} from '../styledComponents';

const ShowDraftList = ({ text, drafts }) => {
  return (
    <>
      <DraftMainDiv>

        <CategoryTitle>
          {text}
        </CategoryTitle>

        <DraftMainBox>
          {drafts.map(draft => (
            <DraftImgBox key={draft._id}>
              <DraftImg
                width={`${draft.image.width}px`}
                height={`${draft.image.height}px`}
                src={draft.image.url}
                alt={draft.title}
              />

              <DraftImgInfo>
                <DraftTattooistDiv></DraftTattooistDiv>
                <DraftImgTitle>{draft.title}</DraftImgTitle>
              </DraftImgInfo>
            </DraftImgBox>
          ))}
        </DraftMainBox>
        
      </DraftMainDiv>
    </>
  );
};

export default ShowDraftList;