import styled from '@emotion/styled';

export const ShopsTitle = styled.h1`
  margin: 0;
  margin-bottom: 40px;
  font-size: 62px;
  color: rgb(172, 170, 170);
`;

export const ShopsContainer = styled.div`
  padding: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgb(230, 230, 230);
`;

export const ShopsNames = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-bottom: 20px;
  padding: 20px;
`;

export const ShopList = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  gap: 50px;
  margin: 0;
  padding: 0;

  list-style: none;
`;
export const ShopItem = styled.li`
  min-width: 70px;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 20px;
  padding: 0 10px;
  background-color: rgb(230, 230, 230);
  box-shadow: 1px 1px 2px 2px #000000;
  cursor: pointer;
  &:hover {
    box-shadow: none;
  }
`;

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
