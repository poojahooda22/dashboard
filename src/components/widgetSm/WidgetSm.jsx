import React from 'react'
import './WidgetSm.css';
import User2 from '../../assets/User2.png';
import User3 from '../../assets/User3.png';
import User1 from '../../assets/User1.png';
import User4 from '../../assets/User4.png';
import User5 from '../../assets/User5.png';

function WidgetSm() {
  return (
    <div className='widgetSm'>
        <span className='widgetSmTitle'>Active Members</span>
        <ul className='widgetSmList'>
            <li className='widgetSmListItem'>
                <img  src={User2} alt="user" className='widgetSmImg'/>
                <div className='widgetSmUser'>
                    <span className='widgetSmUsername'>Andi Lane</span>
                    <span className='widgetSmUserTitle'>Member Since Jan 2022</span>
                </div>
                {/* <button className='widgetSmButton'>
                    <FaIcons.FaEye />
                    Display
                </button> */}
            </li>
            <li className='widgetSmListItem'>
                <img  src={User3} alt="user" className='widgetSmImg'/>
                <div className='widgetSmUser'>
                    <span className='widgetSmUsername'>Demi Wikinson</span>
                    <span className='widgetSmUserTitle'>Member since Mar 2022</span>
                </div>
                {/* <button className='widgetSmButton'>
                    <FaIcons.FaEye />
                    Display
                </button> */}
            </li>
            <li className='widgetSmListItem'>
                <img  src={User1} alt="user" className='widgetSmImg'/>
                <div className='widgetSmUser'>
                    <span className='widgetSmUsername'>Natali Craig</span>
                    <span className='widgetSmUserTitle'>Member since Apr 2022</span>
                </div>
                {/* <button className='widgetSmButton'>
                    <FaIcons.FaEye />
                    Display
                </button> */}
            </li>
            <li className='widgetSmListItem'>
                <img  src={User4} alt="user" className='widgetSmImg'/>
                <div className='widgetSmUser'>
                    <span className='widgetSmUsername'>Rene Wells</span>
                    <span className='widgetSmUserTitle'>Member since Dec 2022</span>
                </div>
                {/* <button className='widgetSmButton'>
                    <FaIcons.FaEye />
                    Display
                </button> */}
            </li>
            <li className='widgetSmListItem'>
                <img  src={User5} alt="user" className='widgetSmImg'/>
                <div className='widgetSmUser'>
                    <span className='widgetSmUsername'>Joshua Wilson</span>
                    <span className='widgetSmUserTitle'>Member since Feb 2022</span>
                </div>
                {/* <button className='widgetSmButton'>
                    <FaIcons.FaEye />
                    Display
                </button> */}
            </li>
        </ul>
    </div>
  )
}

export default WidgetSm
