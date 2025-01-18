import React from 'react'
import styles from './CustomButton.module.css'

interface Props {
  title: String;
  onClick: () => void;
  variant: 'primary' | 'secondary'
}

const CustomButton:React.FC<Props> = ({title, onClick, variant}) => {
  return (
    <div>
      <button 
        className={`${styles.button} ${styles[variant]}`}
        onClick={onClick}
        >
          {title}
      </button>
    </div>
  )
}

export default CustomButton