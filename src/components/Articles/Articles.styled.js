import styled from '@emotion/styled';
export const ArticlesList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 25px;
  margin: 0;
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;

  list-style: none;
`;

export const ArticleItem = styled.li`
  border: 1px solid rgb(230, 230, 230);
  border-radius: 20px;
  padding: 10px;
  background-color: rgb(230, 230, 230);
`;

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
`;
export const NameOfShop = styled.h3`
  margin: 0;
  padding: 0;
`;

export const PriceOrder = styled.p`
  margin: 10px;
  margin-right: auto;
  padding: 0;
  font-weight: 500;
  font-size: large;
`;
export const Image = styled.img`
  border-radius: 20px;
  padding: 0;
  margin: 0;
`;

export const BtnAdd = styled.button`
  border-radius: 10px;
  padding: 10px;
  margin-left: auto;
  background-color: #fff;
  border: none;
  box-shadow: 1px 1px 2px 2px #000000;
  cursor: pointer;
  &:hover {
    box-shadow: none;
  }
`;
