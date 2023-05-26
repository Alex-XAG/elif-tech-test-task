import React from 'react';
import { Header } from './Header/Header';
import { Shops } from './Shops/Shops';
import { articles } from './utils/articles';
import { ShopingCart } from './ShopingCart/ShopingCart';

const NAVIGATION_PROPS = {
  shops: 'Shops',
  shopingCart: 'Shoping cart',
  history: 'History',
  coupons: 'Coupons',
};

export class App extends React.Component {
  state = {
    articles: [...articles],
    productsSelected: [],
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

  render() {
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
        <Header optionsNav={Object.values(NAVIGATION_PROPS)} />
        <Shops handleAddCartToShopingCart={this.handleAddCartToShopingCart} />
        <ShopingCart
          handleAddCartToShopingCart={this.handleAddCartToShopingCart}
          productsSelected={this.state.productsSelected}
        />
      </div>
    );
  }
}
