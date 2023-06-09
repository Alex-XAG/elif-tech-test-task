import React from 'react';
import { Header } from './Header/Header';
import { Shops } from './Shops/Shops';
import { articles } from './utils/articles';
import { ShopingCart } from './ShopingCart/ShopingCart';

const NAVIGATION_PROPS = {
  shops: 'Shops',
  shopingCart: 'Shoping cart',
};

export class App extends React.Component {
  state = {
    articles: [...articles],
    productsSelected: [],
    activePage: NAVIGATION_PROPS.shops,
  };

  handleAddCartToShopingCart = productId => {
    const isProductInShopingCart = this.state.productsSelected.find(
      product => product.id === productId
    );

    if (!isProductInShopingCart) {
      const product = this.state.articles.find(
        article => article.id === productId
      );

      this.setState(prevState => ({
        productsSelected: [
          ...prevState.productsSelected,
          { ...product, quantity: 1 },
        ],
      }));
    }
  };

  handleIncrementQuantityOfOrder = productId => {
    const product = this.state.productsSelected.find(
      product => product.id === productId
    );
    const updatedQuantity = this.state.productsSelected.map(item => {
      if (product.id === item.id) {
        return { ...item, quantity: (item.quantity += 1) };
      }

      return item;
    });

    this.setState({ productsSelected: updatedQuantity });
  };

  handleDecrementQuantityOfOrder = productId => {
    const product = this.state.productsSelected.find(
      product => product.id === productId
    );

    if (product.quantity <= 1) {
      this.handleRemoveOrder(productId);
      return;
    }

    const updatedQuantity = this.state.productsSelected.map(item => {
      if (product.id === item.id) {
        return { ...item, quantity: (item.quantity -= 1) };
      }

      return item;
    });

    this.setState({ productsSelected: updatedQuantity });
  };

  handleRemoveOrder = productId => {
    const updatedOrder = this.state.productsSelected.filter(
      product => product.id !== productId
    );
    this.setState({ productsSelected: updatedOrder });
  };

  handleClearArr = () => {
    console.log(this.state.productsSelected);
    const emptyArr = [];
    this.setState({ productsSelected: emptyArr });
  };

  handleActivePage = ({ target }) => {
    this.setState({
      activePage: Object.values(NAVIGATION_PROPS).filter(value => {
        return value === target.textContent;
      })[0],
    });
  };

  render() {
    const { productsSelected, activePage } = this.state;

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '1300px',
        }}
      >
        <Header
          handleActivePage={this.handleActivePage}
          optionsNav={Object.values(NAVIGATION_PROPS)}
        />
        {activePage === NAVIGATION_PROPS.shops && (
          <Shops
            productsSelected={productsSelected}
            handleAddCartToShopingCart={this.handleAddCartToShopingCart}
          />
        )}

        {activePage === NAVIGATION_PROPS.shopingCart && (
          <ShopingCart
            handleClearArr={this.handleClearArr}
            handleRemoveOrder={this.handleRemoveOrder}
            handleIncrementQuantityOfOrder={this.handleIncrementQuantityOfOrder}
            handleDecrementQuantityOfOrder={this.handleDecrementQuantityOfOrder}
            productsSelected={productsSelected}
          />
        )}
      </div>
    );
  }
}
