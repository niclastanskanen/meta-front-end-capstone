import React from 'react'

import image from '../../assets/restaurantfood.jpg'
import './Hero.css'

const Hero = () => {
  return (
    <section aria-label="Hero Section" className="heroSection twelveColGrid">
        <div>
          <div aria-label="Spotlight" className="content">
            <div className="titleContainer">
              <h1>Little Lemon</h1>
              <h3 className="subHeading">Chicago</h3>
            </div>
            <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <button className="primaryBtn" text="Reserve a Table" to="/booking">Reserve a Table</button>
          </div>
        </div>
        <div aria-label="Image Container" className="imgContainer">
          <span>
            <img src={image} alt="Restaurant Food" height={340} />
          </span>
        </div>
      </section>
  )
}

export default Hero