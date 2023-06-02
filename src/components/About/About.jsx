import React from 'react'

import chefs from '../../assets/Mario_Adrian_B.jpg'
import restaurant from '../../assets/restaurant.jpg'

import './About.css'

const About = () => {
  return (
    <section aria-label="About Section" className="aboutSection twelveColGrid">
        <div>
          <div className="titleContainer">
            <h2>Little Lemon</h2>
            <h3 className="subHeading">Chicago</h3>
          </div>
          <p>
            Little Lemon Chicago is a family-owned Mediterranean restaurant located in the heart of the city. The restaurant is run by brothers Mario and Adrian, who have always had a passion for cooking and serving delicious food. Growing up in a Mediterranean household, the brothers were exposed to traditional recipes from an early age, and they decided to bring those recipes to the masses with a modern twist. At Little Lemon, you can expect to find a menu full of classic dishes with a creative twist that makes them stand out from the rest. Whether you're looking for a quick lunch or a leisurely dinner, Little Lemon Chicago is the perfect place to indulge in a delicious meal in a cozy and welcoming atmosphere.
          </p>
        </div>
          <div aria-label="Image Gallery">
            <div class="imgContainer">
              <span>
                <img src={restaurant} alt="Restaurant Interior" />
              </span>
            </div>
            <div class="imgContainer">
              <span>
                <img src={chefs} alt="Mario and Adrian" />
              </span>
            </div>
          </div>
      </section>
  )
}

export default About