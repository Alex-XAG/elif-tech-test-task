import React from 'react';
import {
  ArticlesList,
  ArticleItem,
  Article,
  NameOfShop,
  PriceOrder,
  Image,
  BtnAdd,
} from './Articles.styled';

export const Articles = ({
  articles,
  productsSelected,
  handleAddCartToShopingCart,
  handleOrderShop,
}) => {
  return (
    <ArticlesList>
      {articles.map(({ shop, id, title, urlImg, price }) => {
        const isInShopingCart = productsSelected.find(
          product => product.id === id
        );

        return (
          <ArticleItem key={id}>
            <Article>
              <NameOfShop>{shop}</NameOfShop>
              <PriceOrder>{title}</PriceOrder>
              <Image src={urlImg} alt={title} width="320" height="210" />
              <PriceOrder>Price: {price}$</PriceOrder>
              <BtnAdd
                onClick={() => {
                  handleOrderShop(shop);
                  return handleAddCartToShopingCart(id);
                }}
                isInShopingCart={isInShopingCart}
                type="button"
              >
                {isInShopingCart ? 'Ordered' : 'Add to order'}
              </BtnAdd>
            </Article>
          </ArticleItem>
        );
      })}
    </ArticlesList>
  );
};
