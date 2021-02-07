import React from 'react';
import './Home.css';
import Product from './Product';
function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          className='home__image'
          src='https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg'
        />
        <div className='home__row home__row1'>
          <Product
            id='4664789'
            title='The lean startup'
            price={19.9}
            image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
            rating={5}
          />
          <Product
            id='1354689'
            image='https://images-na.ssl-images-amazon.com/images/I/71-Su4Wr0HL._SL1500_.jpg'
            rating={4}
            price={300}
            id='1313464'
            title='Samsung Galaxy MO2 16.55cm HD+DISPLAY 13mp dual camera'
          />
        </div>
        <div className='home__row'>
          <Product
            id='4903850'
            title='Ultimate Ears Boom 3 Portable Bluetooth Wireless Speaker (Lagoon Blue) '
            price={150}
            image='https://images-na.ssl-images-amazon.com/images/I/81Q8Et2q0rL._SL1500_.jpg'
            rating={4}
          />
          <Product
            id='3342345'
            title='APC Back-UPS BX1100C-IN 1100VA / 660W, 230V, UPS System'
            price={100}
            rating={4}
            image='https://images-na.ssl-images-amazon.com/images/I/51PIIdmOSLL._SL1500_.jpg'
          />
          <Product
            id='4645465'
            title='HP DeskJet 2331 All-in-One Inkjet Colour Printer '
            price={100}
            rating={3}
            image='https://images-na.ssl-images-amazon.com/images/I/71055a9T9HL._SL1500_.jpg'
          />
        </div>
        <div className='home__row'>
          <Product
            id='4903850'
            title="Samsung LC49RG90SSUXEN 49'"
            price={150}
            image='https://cdn.shopify.com/s/files/1/0214/1369/1456/products/NewProject_14_1512x_d9ac4c2d-bfe8-460b-b251-877b782df5b6_740x.jpg?v=1612424011'
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
