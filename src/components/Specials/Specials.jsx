import React from 'react'

import salad from '../../assets/greek_salad.jpg'
import bruchetta from '../../assets/bruchetta.svg'
import dish from '../../assets/Dish_icon.svg'
import lemon from '../../assets/lemon_dessert.jpg'

import './Specials.css'

const Specials = () => {
  return (
    <section aria-label="Specials Section" className="specialsSection twelveColGrid">
        <span aria-label="Title and Button">
          <h2>This Week's Specials!</h2>
        </span>
        <span aria-label="Title and Button">
          <button className="primaryBtn" text="Online Menu">Online Menu</button>
        </span>
        <div aria-label="Specials List">
          <article aria-label="Food Card" className="card">
            <div aria-label="Card Image Container" className="imgContainer">
              <span>
                <img src={salad} alt="Greek salad" />
              </span>
            </div>
            <div aria-label="Card Content" className="cardContentContainer">
              <div aria-label="Title and Price">
                <h4>Greek salad</h4>
                <p>$12.99</p>
              </div>
              <p aria-label="Food Description">The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago-style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
              <div aria-label="Order Container">
                <a href="/booking">Order a delivery</a>
                <span>
                  <img src={dish} alt="Dish Icon" />
                </span>
              </div>
            </div>
          </article>
          <article aria-label="Food Card" className="card">
            <div aria-label="Card Image Container" className="imgContainer">
              <span>
                <img src={bruchetta} alt="Bruschetta" />
              </span>
            </div>
            <div aria-label="Card Content" className="cardContentContainer">
              <div aria-label="Title and Price">
                <h4>Bruschetta</h4>
                <p>$5.99</p>
              </div>
              <p aria-label="Food Description">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
              <div aria-label="Order Container">
                <a href="/booking">Order a delivery</a>
                <span>
                  <img src={dish} alt="Dish Icon" />
                </span>
              </div>
            </div>
          </article>
          <article aria-label="Food Card" className="card">
            <div aria-label="Card Image Container" className="imgContainer">
              <span>
                <img src={lemon} alt="Lemon Dessert" />
              </span>
            </div>
              <div aria-label="Card Content" className="cardContentContainer">
                <div aria-label="Title and Price">
                  <h4>Lemon Dessert</h4>
                  <p>$4.99</p>
                </div>
                  <p aria-label="Food Description">This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                    <div aria-label="Order Container">
                      <a href="/booking">Order a delivery</a>
                      <span>
                        <img src={dish} alt="Dish Icon" />
                      </span>
                    </div>
                </div>
            </article>
        </div>
      </section>
  )
}

export default Specials