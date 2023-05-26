import styled from '@emotion/styled';

export const ShopingCartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ShopingCartList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 10px;
  gap: 30px;
  list-style: none;
  margin: 0;
  padding: 10px;
`;

export const ShopingCartArticle = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: 200px;
  gap: 5px;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 15px;
`;

export const OrderImg = styled.img`
  padding: 0;
  margin: 0;
  border-radius: 10px;
`;

export const OrderText = styled.p`
  font-weight: 600;
  padding: 0;
  margin: 5px;
`;

export const BtnDecIncr = styled.button`
  text-align: center;
  margin-right: 10px;
  min-width: 30px;
  min-height: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const BtnRemove = styled.button`
  text-align: center;
  margin-right: 10px;
  min-width: 50px;
  min-height: 30px;
  border-radius: 10px;
  margin-bottom: 20px;
`;
