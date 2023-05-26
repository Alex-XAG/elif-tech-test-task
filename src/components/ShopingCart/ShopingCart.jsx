export const ShopingCart = ({
  handleAddCartToShopingCart,
  productsSelected,
}) => {
  return (
    <div>
      <ul>
        {productsSelected.map(product => {
          return (
            <li key={product.id}>
              <article>
                <h3>{product.shop}</h3>
                <img src={product.urlImg} alt={product.title} />
                <p>Price: {product.price}$</p>
                <p>{product.quantity}</p>
                <button>-</button>
                <button>+</button>
                <button>Remove from order</button>
              </article>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
