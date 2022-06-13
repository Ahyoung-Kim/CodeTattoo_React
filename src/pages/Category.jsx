import React from 'react';
import { 
  CategoryDiv,
  CategoryBox,
  CategoryText,
  CategoryUl,
  CategorySubText,
  CategoryLi
} from '../styledComponents';

const Category = () => {
  return (
    <>
      <CategoryDiv>
        <CategoryText>Category</CategoryText>

        <CategoryBox>

          <CategoryUl>
            <CategorySubText>User</CategorySubText>
            <CategoryLi>도안 찜</CategoryLi>
            <CategoryLi>타투이스트 찜</CategoryLi>
          </CategoryUl>

          <CategoryUl>
            <CategorySubText>Tattoo</CategorySubText>
            <CategoryLi>최신 도안</CategoryLi>
            <CategoryLi>인기 도안</CategoryLi>
            <CategoryLi>전체 도안</CategoryLi>
          </CategoryUl>

          <CategoryUl>
            <CategorySubText>게시판</CategorySubText>
            <CategoryLi>Q n A</CategoryLi>
            <CategoryLi>문의</CategoryLi>
            <CategoryLi>Contact</CategoryLi>
          </CategoryUl>

        </CategoryBox>

      </CategoryDiv>
    </>
  );
};

export default React.memo(Category);