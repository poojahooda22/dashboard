import React from 'react'
import * as FaIcons from 'react-icons/fa';
import './FeaturedInfo.css';

import { data1, data2, data3 } from '../../dummyData'
import smallChart from '../smallChart/smallChart';

function FeaturedInfo() {
  

  return (
    <div className='featured'>

      {/* 1st card */}
      <div className='featuredItem'>
        <div>
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
        <div className='featuredChart'>
          {smallChart(data1, 'Active User', 'red')}
        </div>
      </div>

      {/* 2nd card */}
      <div className='featuredItem'>
        <div>
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

        <div className='featuredChart'>
        {smallChart(data2, 'Active User', 'green')}
        </div>  
      </div>


      {/* 3rd card */}
      <div className='featuredItem'>
        <div>
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
        
        <div className='featuredChart'>
        {smallChart(data3, 'Active User', 'red')}
        </div>
      </div>
    </div>
  )
}

export default FeaturedInfo
