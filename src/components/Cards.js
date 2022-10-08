import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>check out these EPIC Destinations</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__item">
                    <CardItem
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services' />

                    <CardItem
              src='images/img-2.jpg'
              text='Travel through the islands of Bali in private cruise'
              label='Laxury'
              path='/services' />
                    </ul>
                    <ul className="cards__item">
                    <CardItem
              src='images/img-3.jpg'
              text='set sale in the atlantic ocean visting uncharted water'
              label='mistery'
              path='/services' />

                    <CardItem
              src='images/img-4.jpg'
              text='Experince football on top of the himalayan mountains'
              label='Adventure'
              path='/products' />

                    <CardItem
              src='images/img-8.jpg'
              text='ride through sahara desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up' />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards

