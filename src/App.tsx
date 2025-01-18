import Navbar from './component/Navbar'
import './App.css'
import CardCategory from './component/CardCategory'
import CardBenefit from './component/CardBenefit'
import { categoryData, featureData } from './data/dummyData'
import CustomButton from './component/CustomButton'
import CustomInput from './component/CustomInput'

function App() {

  return (
    <>
      <Navbar/>
      <section className='hero'>
        <div className='hero-left'>
          <div>
            <h1>Kyiv LuxeBouquets</h1>
            <p>Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread Joy with Our Online Flower Delivery Service</p>
          </div>
          <hr />
          <div className='flex-row'>
            <img src="src/assets/image/img-hero.png" alt="hero image" />
            <div className="vertical-line"></div>
            <p>Experience the joy of giving with our modern floral studio. Order online and send fresh flowers, plants and gifts today.</p>
          </div>
        </div>
        <div className='hero-right'>
          <div>
            {categoryData.map((category)=>(
              <CardCategory
                key={category.id}
                image={category.image}
                title={category.title}
                reverse={category.reverse}
              />
            ))}
          </div>
        </div>
      </section>
      <section className='about-us'>
        <div className='about-left'>
          <h1>About us</h1>
        </div>
        <div className='about-right'>
          <h4>OUR STORY</h4>
          <h2>Kyiv LuxeBouquets</h2>
          <p>We are a modern local floral studio, which specializes in the design and delivery of unique bouquets. We have the best florists who carefully select each look, our studio cooperates directly with farms for growing different flowers, so we always have fresh flowers, which are collected by our florists in exquisite bouquets. We have a collection of fresh bouquets, collections of dried bouquets, house plants, as well as fragrant candles from luxury brands to create the perfect atmosphere. Make someone's day amazing by sending flowers, plants and gifts the same or next day. Ordering flowers online has never been easier.</p>
          <CustomButton onClick={()=>{}} title={"LEARN MORE"} variant='secondary'/>
        </div>
      </section>
      <section className='why-choose'>
        <div className='why-left'>
          <h1>Why choose us ?</h1>
        </div>
        <div className='why-right'>
          {featureData.map((feature) => (
            <CardBenefit 
              key={feature.id} 
              title={feature.title}
              desc={feature.description}
            />
          ))}
        </div>
      </section>
      <section className='contact'>
          <div className='contact-left'>
            <div className='contact-left-up'>
              <h1>To Contact Us</h1>
              <p>We will call you back</p>
              <div className='flex-row gap-16'>
                <CustomInput placeholder='+380 XX XXX XX XX'/>
                <CustomButton onClick={()=>{}} title={"BOOK A CALL"} variant='primary'/>
              </div>
            </div>
            <div className='grid-row'>
              <div className='grid-contact'>
                <h2>Phone</h2>
                <div>
                  <p>+380980099777</p>
                  <p>+380980099777</p>
                </div>
              </div>
              <div className='grid-contact'>
                <h2>Address</h2>
                <div>
                  <p>opening hours: 8 to 11 p.m.</p>
                  <p>15/4 Khreshchatyk Street, Kyiv </p>
                </div>
              </div>
            </div>
          </div>
          <div className='contact-right'>
            <img src="src/assets/image/card-item-2.png" alt="images" />
            <div className='flex-row'>
              <h2>Follow us</h2>
              <div>
                <a href="">ig</a>
                <a href="">ig</a>
                <a href="">ig</a>
                <a href="">ig</a>
                <a href="">ig</a>
              </div>
            </div>
          </div>
      </section>
    </>
  )
}

export default App
