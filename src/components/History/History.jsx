import React from 'react';

import { HistoryList } from './History.styled';

export const History = ({ options }) => {
  const clearHistory = () => localStorage.removeItem('Client contacts');
  const data = localStorage.getItem('Client contacts');
  let parcedData = JSON.parse(data);
  console.log(parcedData);
  if (parcedData === [] || parcedData === null) {
    parcedData = localStorage.setItem(
      'Client contacts',
      JSON.stringify(options)
    );
  }

  return (
    <div>
      <div>
        <h1>History</h1>
      </div>

      <HistoryList>
        {parcedData.historyArr.map(optionArr => {
          return optionArr.map(
            ({ id, shop, urlImg, title, price, quantity }) => {
              return (
                <li key={id}>
                  <h3>Client name: {parcedData.name}</h3>
                  <h3>Client phone: {parcedData.phone}</h3>
                  <article>
                    <h3>{shop}</h3>
                    <img src={urlImg} alt={title} />
                    <p>Price / per item: {price}$</p>
                    <p>Quantity: {quantity}</p>
                    <p>Total: {price * quantity}$</p>
                  </article>
                </li>
              );
            }
          );
        })}
      </HistoryList>
      <button type="button" onClick={clearHistory}>
        Clear history
      </button>
    </div>
  );
};
