import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal.js';
import { useStateValue } from './StateProvider.js';
import CheckoutProduct from './CheckoutProduct';
function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  const length = basket.length;
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          className='checkout__ad'
          src='https://images-eu.ssl-images-amazon.com/images/G/31/img20/Vernac13th/1500x150_V2_Eng._CB412582591_.jpg'
          alt=''
        />
        <div>
          <h2 className='checkout__title'>Your Shopping Basket</h2>
          {length === 0 && (
            <div className='empty-cart'>NO PRODUCTS! ADD SOME,</div>
          )}
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className='checkout__right'>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
