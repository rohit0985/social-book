import React from 'react'
import "./TrendCard.css"
import { trendData } from '../../Data/trendData'

const TrendCard = () => {
  return (
    <div className='trendCard'>
      <h3>Trends for you </h3>
      
        {
            trendData && trendData.map((trend, idx)=>{
                return (
                    <div className="trend">
                        <span>#{trend.name}</span>
                        <span>{trend.shares}k</span>
                    </div>
                )
            })
        }
     
    </div>
  )
}

export default TrendCard
