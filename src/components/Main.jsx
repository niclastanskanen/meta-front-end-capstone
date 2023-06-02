import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';

import image from '../assets/restaurantfood.jpg'
import salad from '../assets/greek_salad.jpg'
import bruchetta from '../assets/bruchetta.svg'
import dish from '../assets/Dish_icon.svg'
import lemon from '../assets/lemon_dessert.jpg'
import profile from '../assets/profile.jpeg'
import profile2 from '../assets/profile2.jpeg'
import profile3 from '../assets/profile3.jpeg'
import profile4 from '../assets/profile4.jpeg'
import chefs from '../assets/Mario_Adrian_B.jpg'
import restaurant from '../assets/restaurant.jpg'


const Main = () => {
  return (
    <main>
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
          <span className="lazy-load-image-background blur lazy-load-image-loaded" style={{ color: 'transparent', display: 'inline-block' }}>
            <img src={image} alt="Restaurant Food" height={340} />
          </span>
        </div>
      </section>

      <section aria-label="Specials Section" class="specialsSection twelveColGrid">
        <span aria-label="Title and Button">
          <h2>This Week's Specials!</h2>
        </span>
        <span aria-label="Title and Button">
          <button class="primaryBtn" text="Online Menu">Online Menu</button>
        </span>
        <div aria-label="Specials List">
          <article aria-label="Food Card" class="card">
            <div aria-label="Card Image Container" class="imgContainer">
              <span>
                <img src={salad} alt="Greek salad" />
              </span>
            </div>
            <div aria-label="Card Content" class="cardContentContainer">
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
          <article aria-label="Food Card" class="card">
            <div aria-label="Card Image Container" class="imgContainer">
              <span>
                <img src={bruchetta} alt="Bruschetta" />
              </span>
            </div>
            <div aria-label="Card Content" class="cardContentContainer">
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
          <article aria-label="Food Card" class="card">
            <div aria-label="Card Image Container" class="imgContainer">
              <span>
                <img src={lemon} alt="Lemon Dessert" />
              </span>
            </div>
              <div aria-label="Card Content" class="cardContentContainer">
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

      <section aria-label="Reviews Section" className="testimonialsSection twelveColGrid">
        <h3>What do our customers think?</h3>
        <div className="reviewsContainer">
          <article aria-label="Review" className="review">
            <div>
              <div className="imgContainer">
                <span>
                  <img src={profile2} alt="Sara Lopez's Profile Pic" />
                </span>
              </div>
              <div aria-label="Name and Username">
                <p aria-label="Name">Sara Lopez</p>
                <small>Sara72</small>
              </div>
            </div>
            <div aria-label="Rating">
              <span aria-label="Star Icon" className="material-symbols-rounded"><AiOutlineStar /></span>
              <span aria-label="Star Icon" className="material-symbols-rounded"><AiOutlineStar /></span>
              <span aria-label="Star Icon" className="material-symbols-rounded"><AiOutlineStar /></span>
              <span aria-label="Star Icon" className="material-symbols-rounded"><AiOutlineStar /></span>
              <span aria-label="Star Icon" className="material-symbols-rounded"><AiOutlineStar /></span>
            </div>
            <p aria-label="Review Description">"Seriously cannot stop thinking about the Turkish Mac n' Cheese!!"</p>
          </article>
          <article aria-label="Review" className="review">
            <div>
              <div className="imgContainer">
                <span>
                  <img src={profile} alt="John Doucette's Profile Pic" />
                </span>
              </div>
              <div aria-label="Name and Username">
                <p aria-label="Name">John Doucette</p>
                <small>Johnny_Utah</small>
              </div>
            </div>
            <div aria-label="Rating">
              <span aria-label="Star Icon" className="material-symbols-rounded"><AiOutlineStar /></span>
              <span aria-label="Star Icon" className="material-symbols-rounded"><AiOutlineStar /></span>
              <span aria-label="Star Icon" className="material-symbols-rounded"><AiOutlineStar /></span>
              <span aria-label="Star Icon" className="material-symbols-rounded"><AiOutlineStar /></span>
              <span aria-label="Star Icon" className="material-symbols-rounded"><AiOutlineStar /></span>
            </div>
            <p aria-label="Review Description">"We had such a great time celebrating my grandmother's birthday!"</p>
          </article>
          <article aria-label="Review" className="review">
            <div>
              <div className="imgContainer">
                <span>
                  <img src={profile3} alt="Jimmy Crickets's Profile Pic" />
                </span>
              </div>
              <div aria-label="Name and Username">
                <p aria-label="Name">Jimmy Crickets</p>
                <small>crick_it</small>
              </div>
            </div>
            <div aria-label="Rating">
              <span aria-label="Star Icon" className="material-symbols-rounded"><AiOutlineStar /></span>
              <span aria-label="Star Icon" className="material-symbols-rounded"><AiOutlineStar /></span>
              <span aria-label="Star Icon" className="material-symbols-rounded"><AiOutlineStar /></span>
              <span aria-label="Star Icon" className="material-symbols-rounded"><AiOutlineStar /></span>
              <span aria-label="Star Icon" className="material-symbols-rounded"><AiOutlineStar /></span>
            </div>
            <p aria-label="Review Description">"Such a chilled out atmosphere, love it!"</p>
          </article>
          <article aria-label="Review" className="review">
            <div>
              <div className="imgContainer">
                <span>
                  <img src={profile4} alt="Mia Maria's Profile Pic" />
                </span>
              </div>
              <div aria-label="Name and Username">
                <p aria-label="Name">Mia Maria</p>
                <small>flowerTime</small>
              </div>
            </div>
            <div aria-label="Rating">
              <span aria-label="Star Icon" className="material-symbols-rounded"><AiOutlineStar /></span>
              <span aria-label="Star Icon" className="material-symbols-rounded"><AiOutlineStar /></span>
              <span aria-label="Star Icon" className="material-symbols-rounded"><AiOutlineStar /></span>
              <span aria-label="Star Icon" className="material-symbols-rounded"><AiOutlineStar /></span>
              <span aria-label="Star Icon" className="material-symbols-rounded"><AiOutlineStar /></span>
            </div>
            <p aria-label="Review Description">"Best Feta Salad in town. Flawless every time!"</p>
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
          <div className="imgContainer">
            <span>
              <img src={restaurant} alt="Restaurant Interior" />
            </span>
          </div>
          <div className="imgContainer">
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
