import { ShopingForm } from 'components/ShopingForm/ShopingForm';
import {
  ShopingCartContainer,
  ShopingCartList,
  ShopingCartArticle,
  OrderImg,
  OrderText,
  BtnDecIncr,
  BtnRemove,
} from './ShopingCart.styled';

export const ShopingCart = ({
  handleIncrementQuantityOfOrder,
  handleDecrementQuantityOfOrder,
  handleRemoveOrder,
  productsSelected,
}) => {
  return (
    <>
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
                        -
                      </BtnDecIncr>
                      <BtnDecIncr
                        type="button"
                        onClick={() => handleIncrementQuantityOfOrder(id)}
                      >
                        +
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
