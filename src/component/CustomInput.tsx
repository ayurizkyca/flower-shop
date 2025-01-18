import React from 'react'
import styles from './CustomInput.module.css'

interface Props {
  placeholder?: string;
}

const CustomInput: React.FC<Props> = ({placeholder}) => {
  return (
    <div>
      <input className={styles.input} type="text" placeholder={placeholder}/>
    </div>
  )
}

export default CustomInput