import React from 'react'
import styles from './Navbar.module.css'

const Navbar:React.FC = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.leftLink}>
        <a href="">Shop</a>
        <a href="">Contact</a>
      </div>
      <a href=""></a>
      <div className={styles.rightLink}>
        <a href="">Sign In</a>
        <a href="">Cart</a>
      </div>
    </div>
  )
}

export default Navbar