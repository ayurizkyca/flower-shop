import React from 'react'
import PageLayout from '../component/Layout/PageLayout'
import { freshFlowers } from '../data/dummyData'

const CategoryPage: React.FC = () => {
  return (
    <PageLayout>
      <div className='category'>
        <div className='category-left'>
            <h1>Fresh Flowers</h1>
        </div>
        <div className='category-right'>
          {freshFlowers.map((flower)=>(
            <img src={flower.image} alt="fresh flower" key={flower.id} />
          ))}
        </div>
      </div>
    </PageLayout>
  )
}

export default CategoryPage