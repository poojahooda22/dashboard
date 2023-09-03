import React from 'react'
import './Home.css'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Chart from '../../components/chart/Chart'
import { userData } from '../../dummyData'
import WidgetLg from '../../components/widgetLg/WidgetLg'
import WidgetSm from '../../components/widgetSm/WidgetSm'


function Home() {
  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className='homeWidget'>
        <WidgetSm />
        <WidgetLg />
        
      </div>
    </div>
  );
}

export default Home;
