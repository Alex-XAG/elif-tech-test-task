import React from 'react';
import { ShopingForm } from 'components/ShopingForm/ShopingForm';
import { FaPlus, FaMinus } from 'react-icons/fa';
import {
  ShopingCartContainer,
  ShopingCartList,
  ShopingCartArticle,
  OrderImg,
  OrderText,
  BtnDecIncr,
  BtnRemove,
  ShopingCartTitle,
} from './ShopingCart.styled';

export const ShopingCart = ({
  handleIncrementQuantityOfOrder,
  handleDecrementQuantityOfOrder,
  handleRemoveOrder,
  productsSelected,
}) => {
  return (
    <>
      <ShopingCartTitle>Shoping cart</ShopingCartTitle>
      <ShopingCartContainer>
        <ShopingForm productsSelected={productsSelected} />
        <ShopingCartList>
          {productsSelected.map(
            ({ id, shop, urlImg, title, price, quantity }) => {
              return (
                <li key={id}>
                  <ShopingCartArticle>
                    <h3>{shop}</h3>
                    <OrderImg src={urlImg} alt={title} />
                    <OrderText>Price / per item: {price}$</OrderText>
                    <OrderText>Quantity: {quantity}</OrderText>
                    <OrderText>Total: {price * quantity}$</OrderText>

                    <div>
                      <BtnDecIncr
                        type="button"
                        onClick={() => handleDecrementQuantityOfOrder(id)}
                      >
                        <FaMinus />
                      </BtnDecIncr>
                      <BtnDecIncr
                        type="button"
                        onClick={() => handleIncrementQuantityOfOrder(id)}
                      >
                        <FaPlus />
                      </BtnDecIncr>
                    </div>

                    <BtnRemove
                      type="button"
                      onClick={() => handleRemoveOrder(id)}
                    >
                      Remove from order
                    </BtnRemove>
                  </ShopingCartArticle>
                </li>
              );
            }
          )}

          {productsSelected.length === 0 && <h1>There is no orders !!!</h1>}
        </ShopingCartList>
      </ShopingCartContainer>
    </>
  );
};
