import React, { ReactNode } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer';

interface Props{
  children: ReactNode;
}

const PageLayout:React.FC<Props> = ({children}) => {
  return (
    <div>
      <Navbar/>
      {children}
      <Footer/>
    </div>
  )
}

export default PageLayout