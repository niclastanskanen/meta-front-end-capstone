import React from 'react';
import { AiFillStar } from 'react-icons/ai';

import profile from '../assets/profile.jpeg'
import profile2 from '../assets/profile2.jpeg'
import profile3 from '../assets/profile3.jpeg'
import profile4 from '../assets/profile4.jpeg'
import chefs from '../assets/Mario_Adrian_B.jpg'
import restaurant from '../assets/restaurant.jpg'
import Hero from './Hero/Hero';
import Specials from './Specials/Specials';

const Main = () => {
  return (
    <main>
      <Hero />
      <Specials />


      <section aria-label="Reviews Section" className="testimonialsSection twelveColGrid">
        <h3>What do our customers think?</h3>
        <div className="reviewsContainer">
          <article aria-label="Review" className="review">
            <div>
              <div className="imgContainer">
                <span>
                  <img src={profile2} alt="Emma Watson's Profile Pic" />
                </span>
              </div>
              <div aria-label="Name and Username">
                <p aria-label="Name">Emma Watson</p>
                <small>emma.watson</small>
              </div>
            </div>
            <div aria-label="Rating">
              <span aria-label="Star Icon" className="starIcon"><AiFillStar /></span>
              <span aria-label="Star Icon" className="starIcon"><AiFillStar /></span>
              <span aria-label="Star Icon" className="starIcon"><AiFillStar /></span>
              <span aria-label="Star Icon" className="starIcon"><AiFillStar /></span>
              <span aria-label="Star Icon" className="starIcon"><AiFillStar /></span>
            </div>
            <p aria-label="Review Description">"I had the pleasure of dining at Little Lemon and was blown away by the flavors! The Mediterranean dishes are a delightful fusion of traditional and modern cuisine. A must-visit for food enthusiasts!"</p>
          </article>
          <article aria-label="Review" className="review">
            <div>
              <div className="imgContainer">
                <span>
                  <img src={profile} alt="David Thompson's Profile Pic" />
                </span>
              </div>
              <div aria-label="Name and Username">
                <p aria-label="Name">David Thompson</p>
                <small>david.thompson</small>
              </div>
            </div>
            <div aria-label="Rating">
              <span aria-label="Star Icon" className="starIcon"><AiFillStar /></span>
              <span aria-label="Star Icon" className="starIcon"><AiFillStar /></span>
              <span aria-label="Star Icon" className="starIcon"><AiFillStar /></span>
              <span aria-label="Star Icon" className="starIcon"><AiFillStar /></span>
              <span aria-label="Star Icon" className="starIcon"><AiFillStar /></span>
            </div>
            <p aria-label="Review Description"> "Little Lemon Chicago exceeded my expectations! The service was impeccable, and the attention to detail in every dish was remarkable. I can't wait to visit again and explore more of their menu."</p>
          </article>
          <article aria-label="Review" className="review">
            <div>
              <div className="imgContainer">
                <span>
                  <img src={profile3} alt="Ethan Cooper's Profile Pic" />
                </span>
              </div>
              <div aria-label="Name and Username">
                <p aria-label="Name">Ethan Cooper</p>
                <small>cooper.ethan</small>
              </div>
            </div>
            <div aria-label="Rating">
              <span aria-label="Star Icon" className="starIcon"><AiFillStar /></span>
              <span aria-label="Star Icon" className="starIcon"><AiFillStar /></span>
              <span aria-label="Star Icon" className="starIcon"><AiFillStar /></span>
              <span aria-label="Star Icon" className="starIcon"><AiFillStar /></span>
              <span aria-label="Star Icon" className="starIcon"><AiFillStar /></span>
            </div>
            <p aria-label="Review Description">"I'm a vegetarian, and Little Lemon offers an incredible selection of vegetarian options. The flavors were vibrant, and the presentation was stunning. A veggie lover's paradise!"</p>
          </article>
          <article aria-label="Review" className="review">
            <div>
              <div className="imgContainer">
                <span>
                  <img src={profile4} alt="Lily Turner's Profile Pic" />
                </span>
              </div>
              <div aria-label="Name and Username">
                <p aria-label="Name">Lily Turner</p>
                <small>lily.turner</small>
              </div>
            </div>
            <div aria-label="Rating">
              <span aria-label="Star Icon" className="starIcon"><AiFillStar /></span>
              <span aria-label="Star Icon" className="starIcon"><AiFillStar /></span>
              <span aria-label="Star Icon" className="starIcon"><AiFillStar /></span>
              <span aria-label="Star Icon" className="starIcon"><AiFillStar /></span>
              <span aria-label="Star Icon" className="starIcon"><AiFillStar /></span>
            </div>
            <p aria-label="Review Description">"Little Lemon Chicago is my go-to restaurant for a special occasion. The cozy atmosphere, attentive staff, and delectable food create an unforgettable dining experience. I highly recommend trying their signature dishes!"</p>
          </article>
        </div>
      </section>

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
    </main>
  );
};

export default Main;
