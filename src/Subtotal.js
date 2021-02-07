import React from 'react';
import './Subtotal.css';
import { useStateValue } from './StateProvider.js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer.js';
function Subtotal() {
  const [{ basket }] = useStateValue();
  const length = basket.length;
  // var value = 0;
  // basket.forEach((element) => {
  //   value += element.price;
  // });
  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({length} items):<strong>{value}</strong>
            </p>
            <small className='subtotal__gift'>
              <input type='checkbox' />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
