import React from 'react'
import PageLayout from '../component/Layout/PageLayout'
import { ICONS } from '../constant/iconsConstant'
import { aboutDataCard } from '../data/dummyData'
import CardAbout from '../component/CardAbout'
import CustomButton from '../component/CustomButton'

const AboutPage:React.FC = () => {
  return (
    <PageLayout>
      <section className='story'>
        <div className='story-left'>
          <h1>
            Our Story <br />About <br />Kyiv LuxeBouquets
          </h1>
          <p>Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread Joy with Our Online Flower Delivery Service</p>
          <div className='sosmed'>
            <a href="#"><img src={ICONS.INSTAGRAM_ROUNDED} alt="sosmed-icon" /></a>
            <a href="#"><img src={ICONS.PINTEREST_ROUNDED} alt="sosmed-icon" /></a>
            <a href="#"><img src={ICONS.FACEBOOK_ROUNDED} alt="sosmed-icon" /></a>
            <a href="#"><img src={ICONS.TWITTER_ROUNDED} alt="sosmed-icon" /></a>
            <a href="#"><img src={ICONS.TELEGRAM_ROUNDED} alt="sosmed-icon" /></a>
          </div>
        </div>
        <div>
          <img src="src/assets/image/hero-about.png" alt="hero about img" />
        </div>
      </section>
      <section className='story-desc'>
        <p>OUR STORY</p>
        <h1>Our Founder's Passion</h1>
        <p>Kyiv LuxeBouquets was founded in 2010 by Natalia Zelinska  with the goal of bringing unique and exquisite bouquets to the people of Kyiv. Natalia has always had a passion for flowers and design, and his vision was to create a local floral studio that would specialize in the creation and delivery of fresh, beautiful, and distinctive bouquets.</p>
      </section>
      <section>
        {aboutDataCard.map((story)=>(
          <CardAbout 
            description={story.description}
            image={story.image}
            title={story.title}
            reverse={story.reverse}
            key={story.id}
          />
        ))}
      </section>
      <section className='story-desc'>
        <h1>Discover Our Beautiful Bouquets</h1>
        <p>Explore our collection of exquisite bouquets and surprise your loved ones with the perfect gift. Click the button below to start shopping</p>
        <CustomButton onClick={()=>{}} title={"SHOP NOW"} variant='primary'/>
      </section>
    </PageLayout>
  )
}

export default AboutPage