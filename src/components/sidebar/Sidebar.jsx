import React from 'react'
import * as FaIcons from 'react-icons/fa';
import './Sidebar.css';


function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebarWrapper'>
            <div className='sidebarMenu'>
                
                <ul className='sidebarList'>
                    <li className='sidebarListItem '>
                        <FaIcons.FaHome className='sidebarIcon '/>
                        Home
                    </li>
                    <li className='sidebarListItem'>
                        <FaIcons.FaChartBar className='sidebarIcon'/>
                        Dashboard
                    </li>
                    <li className='sidebarListItem'>
                        <FaIcons.FaList className='sidebarIcon'/>
                        Projects
                    </li>
                    <li className='sidebarListItem'>
                        <FaIcons.FaUser className='sidebarIcon'/>
                        User
                    </li>
                    <li className='sidebarListItem'>
                        <FaIcons.FaFlag className='sidebarIcon'/>
                        Report
                    </li>
                </ul>
            </div>
        </div>
     
    </div>
  )
}

export default Sidebar;
