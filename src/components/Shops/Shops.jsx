import React from 'react';
import { articles } from '../utils/articles';
import {
  ShopsContainer,
  ArticlesList,
  ShopList,
  ShopsNames,
  ShopItem,
  ArticleItem,
  Article,
  NameOfShop,
  PriceOrder,
  Image,
  BtnAdd,
  ShopsTitle,
} from './Shops.styled';

export class Shops extends React.Component {
  state = {
    articles: [...articles],
    shops: ['Pizza Wow!!!', 'Sushi Great', 'Chiken Rest', 'McDuck'],
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

  render() {
    const { articles } = this.state;
    return (
      <ShopsContainer>
        <ShopsNames>
          <ShopsTitle>S h o p s :</ShopsTitle>

          <ShopList>
            <ShopItem onClick={this.handleAllProposiitions}>
              <p>All shops</p>
            </ShopItem>
            <ShopItem onClick={this.handleShopChoice}>
              <p>McDuck</p>
            </ShopItem>
            <ShopItem onClick={this.handleShopChoice}>
              <p>Chiken Rest</p>
            </ShopItem>
            <ShopItem onClick={this.handleShopChoice}>
              <p>Sushi Great</p>
            </ShopItem>
            <ShopItem onClick={this.handleShopChoice}>
              <p>Pizza Wow!!!</p>
            </ShopItem>
          </ShopList>
        </ShopsNames>

        <ArticlesList>
          {articles.map(({ shop, id, title, urlImg, price }) => {
            return (
              <ArticleItem key={id}>
                <Article>
                  <NameOfShop>{shop}</NameOfShop>
                  <PriceOrder>{title}</PriceOrder>
                  <Image src={urlImg} alt={title} width="320" height="210" />
                  <PriceOrder>Price: {price}$</PriceOrder>
                  <BtnAdd>Add to Cart</BtnAdd>
                </Article>
              </ArticleItem>
            );
          })}
        </ArticlesList>
      </ShopsContainer>
    );
  }
}
