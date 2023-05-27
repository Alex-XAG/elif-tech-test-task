import styled from '@emotion/styled';

export const ShopingCartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

export const ShopingCartTitle = styled.h1`
  margin: 0;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 62px;
  color: rgb(172, 170, 170);
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
  padding: 20px;
  height: 410px;
  width: 730px;
  overflow-y: scroll;
`;

export const ShopingCartArticle = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  min-width: 200px;
  height: 400px;
  background-color: rgb(230, 230, 230);
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
  margin: 0;
  margin-right: 10px;
  min-width: 50px;
  min-height: 25px;
  border-radius: 10px;
  margin-bottom: 20px;
  background-color: #fff;
  padding: 3px 10px;
  cursor: pointer;
  transform: scale(1);
  transition: transform 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67);

  &:hover,
  &:focus {
    transform: scale(1.2);
    background-color: rgb(230, 230, 230);
  }
`;

export const BtnRemove = styled.button`
  font-size: 14px;
  text-align: center;
  margin-right: 10px;
  min-width: 50px;
  min-height: 30px;
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 5px;
  cursor: pointer;
  transform: scale(1);
  transition: transform 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67);

  &:hover,
  &:focus {
    transform: scale(0.9);
    background-color: #fff;
  }
`;

export const EmptyShopingCart = styled.h1`
  height: 50px;
`;
