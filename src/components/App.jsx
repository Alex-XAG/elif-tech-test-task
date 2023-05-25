import React from 'react';
import { Header } from './Header/Header';
import { Shops } from './Shops/Shops';
import { articles } from './utils/articles';

const NAVIGATION_PROPS = {
  shops: 'Shops',
  shopingCart: 'Shoping cart',
  history: 'History',
  coupons: 'Coupons',
};



export class App extends React.Component {
  state={
    articles:[...articles]
  }

  handleAddCartToShopingCart=()=> {
    
  }

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
        <Shops />
      </div>
    );
  }
}
