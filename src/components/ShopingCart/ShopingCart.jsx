import React from 'react';
import { ShopingForm } from 'components/ShopingForm/ShopingForm';
// import { History } from 'components/History/History';
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
  EmptyShopingCart,
} from './ShopingCart.styled';

const INITIAL_STATE = {
  name: '',
  phone: '',
  email: '',
  address: '',
  callback: false,
};

export class ShopingCart extends React.Component {
  state = {
    ...INITIAL_STATE,
    historyArr: [this.props.productsSelected],
  };

  handleSubmitOrder = e => {
    e.preventDefault();
    const historyArrToAdd = this.handleCreateHistoryArrItem();

    this.setState(prevState => ({
      historyArr: [...prevState.historyArr, [...historyArrToAdd]],
    }));
    console.log(this.state);

    // localStorage.setItem('Client contacts', JSON.stringify(this.state));
    this.props.handleClearArr();
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  handleCreateHistoryArrItem = () => {
    const historyArrItem = [...this.props.productsSelected];
    return historyArrItem;
  };

  handleChange = e => {
    const { name, value, checked, type } = e.target;

    const newValue = type === 'checkbox' ? checked : value;
    this.setState({ [name]: newValue });
  };

  render() {
    const {
      handleIncrementQuantityOfOrder,
      handleDecrementQuantityOfOrder,
      handleRemoveOrder,
      productsSelected,
    } = this.props;
    return (
      <>
        <ShopingCartTitle>Shoping cart</ShopingCartTitle>
        <ShopingCartContainer>
          <ShopingForm
            options={this.state}
            handleChange={this.handleChange}
            handleSubmitOrder={this.handleSubmitOrder}
            productsSelected={productsSelected}
          />
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

            {productsSelected.length === 0 && (
              <EmptyShopingCart>There is no orders !!!</EmptyShopingCart>
            )}
          </ShopingCartList>
        </ShopingCartContainer>
        {/* <History options={this.state} /> */}
      </>
    );
  }
}
