import React from 'react';
import { Articles } from 'components/Articles/Articles';
import { articles } from '../utils/articles';
import {
  ShopsContainer,
  ShopList,
  ShopsNames,
  ShopItem,
  ShopsTitle,
} from './Shops.styled';

export class Shops extends React.Component {
  state = {
    articles: [...articles],
    shops: [
      'All shops',
      'Pizza Wow!!!',
      'Sushi Great',
      'Chiken Rest',
      'McDuck',
    ],
  };

  handleShopChoice = evt => {
    const filteredArticles = articles.filter(
      article => article.shop === evt.target.textContent
    );
    this.setState({ articles: [...filteredArticles] });
  };
  handleAllProposiitions = () => {
    this.setState({ articles: [...articles] });
  };

  handleOrderShop = shop => {
    const filteredShops = articles.filter(article => article.shop === shop);

    this.setState({ articles: [...filteredShops], shops: [shop] });
  };

  render() {
    return (
      <ShopsContainer>
        <ShopsNames>
          <ShopsTitle>S h o p s :</ShopsTitle>

          <ShopList>
            {this.state.shops.map(shop => {
              return (
                <ShopItem
                  key={shop}
                  onClick={
                    shop === 'All shops'
                      ? this.handleAllProposiitions
                      : this.handleShopChoice
                  }
                >
                  <p>{shop}</p>
                </ShopItem>
              );
            })}
          </ShopList>
        </ShopsNames>

        <Articles
          handleAddCartToShopingCart={this.props.handleAddCartToShopingCart}
          productsSelected={this.props.productsSelected}
          articles={this.state.articles}
          handleOrderShop={this.handleOrderShop}
        />
      </ShopsContainer>
    );
  }
}
