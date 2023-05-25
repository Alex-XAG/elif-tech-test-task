import React from 'react';
import { Header } from './Header/Header';

const NAVIGATION_PROPS = {
  shops: 'Shops',
  shopingCart: 'Shoping cart',
  history: 'History',
  coupons: 'Coupons',
};

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        width: '1200px',
      }}
    >
      <Header optionsNav={Object.values(NAVIGATION_PROPS)} />
    </div>
  );
};
