import React from 'react'
import CustomInput from './CustomInput'
import CustomButton from './CustomButton'
import styles from './Footer.module.css'

const Footer:React.FC = () => {
  return (
    <div className={styles.footer}>
        <div>
          <p>Remember to offer beautiful flowers from Kyiv LuxeBouquets Valentines Day, Mothers Day, Christmas... Reminds you 7 days before. No spam or sharing your address</p>
          <CustomInput placeholder='Your Email'/>
          <CustomButton onClick={()=>{}} title={"REMIND"} variant='primary'/>
        </div>
        <div>
          <h3>Contact Us</h3>
          <div>
            <div>
              <p>Address</p>
              <p>15/4 Khreshchatyk Street, Kyiv</p>
            </div>
            <div>
              <p>Phone</p>
              <p>+380980099777</p>
            </div>
            <div>
              <p>General Enquiry:</p>
              <p>Kiev.Florist.Studio@gmail.com</p>
            </div>
          </div>
          <div>
            <h3>Follow Us</h3>
            <div>
              <a href="">ig</a>
              <a href="">ig</a>
              <a href="">ig</a>
              <a href="">ig</a>
              <a href="">ig</a>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h3>Shop</h3>
            <a href="">All Products</a>
            <a href="">Fresh Flowers</a>
            <a href="">Dried Flowers</a>
            <a href="">Live Plants</a>
            <a href="">Designer Vases</a>
            <a href="">Aroma Candles</a>
            <a href="">Freshener Diffuser</a>
          </div>
          <div>
            <h3>Service</h3>
            <a href="">Flower Subcription</a>
            <a href="">Wedding & Event Decor</a>
          </div>
        </div>
        <div>
          <h3>About Us</h3>
          <a href="">Our story</a>
          <a href="">Blog</a>
          <a href="">Shipping & returns</a>
          <a href="">Terms & conditions</a>
          <a href="">Privacy policy</a>
        </div>
      </div>
  )
}

export default Footer