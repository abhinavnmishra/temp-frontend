import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>PICK YOUR FAVOURITE!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/bangles.jpg'
              text='Learn Bangle Making!'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/basket.jpg'
              text='Learn Basket Weiving !'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/pot.jpg'
              text='Learn to Paint Beautiful Pots!'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/tailor.jpg'
              text='Learn to Tailor Beautiful Cloths!'
              label='Adventure'
              path='/products'
            />
            <CardItem
              href='https://www.youtube.com/playlist?list=PLAxGPazvUGqEIWr_L_4nv-cKMb5QMoSua'
              src='images/jams.jpg'
              text='Learn to Excel in Making Yummy Jams!'
              label='Adrenaline'
              
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
