import React from 'react'
import * as FaIcons from 'react-icons/fa';
import './FeaturedInfo.css';

function FeaturedInfo() {
  return (
    <div className='featured'>
      <div className='featuredItem'>
        <span className='featuredTitle'>Revenue</span>
        <div className='featuredMoneyContainer'>
            <span className='featuredMoney'>$2,451</span>
            <span className='featuredMoneyRate'>
                -11.6
                <FaIcons.FaArrowDown className='featuredIconNegative'/>
            </span>
        </div>
        <span className="featuredSub">vs last month</span>
      </div>

      <div className='featuredItem'>
        <span className='featuredTitle'>Sales</span>
        <div className='featuredMoneyContainer'>
            <span className='featuredMoney'>$4,451</span>
            <span className='featuredMoneyRate'>
                3.6
                <FaIcons.FaArrowUp className='featuredIcon'/>
            </span>
        </div>
        <span className="featuredSub">vs last month</span>
      </div>
    
      <div className='featuredItem'>
        <span className='featuredTitle'>Cost</span>
        <div className='featuredMoneyContainer'>
            <span className='featuredMoney'>$3,451</span>
            <span className='featuredMoneyRate'>
                -2.6
                <FaIcons.FaArrowDown className='featuredIconNegative'/>
            </span>
        </div>
        <span className="featuredSub">vs last month</span>
      </div>
    </div>
  )
}

export default FeaturedInfo
