import React from 'react'
import * as FaIcons from 'react-icons/fa';
import './Sidebar.css';

import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebarWrapper'>
            <div className='sidebarMenu'>
                <ul className='sidebarList'> 
                    <Link to="/" className='link'>
                        <li className='sidebarListItem '>
                            <FaIcons.FaHome className='sidebarIcon '/>
                            Home
                        </li>
                    </Link>
                    <li className='sidebarListItem'>
                        <FaIcons.FaChartBar className='sidebarIcon'/>
                        Analytics
                    </li>
                    
                    <Link to="/products" className='link' >
                        <li className='sidebarListItem'>
                            <FaIcons.FaList className='sidebarIcon'/>
                            Products
                        </li>
                    </Link>
                    <Link to="/users" className='link'>
                        <li className="sidebarListItem">
                            <FaIcons.FaUser className='sidebarIcon'/>
                            Users
                        </li>
                    </Link>
                    
                    <li className='sidebarListItem'>
                        <FaIcons.FaChartLine className='sidebarIcon'/>
                        Reports
                    </li>
                    <li className='sidebarListItem'>
                        <FaIcons.FaMailchimp className='sidebarIcon'/>
                        Mails
                    </li>
                    
                    <li className='sidebarListItem'>
                        <FaIcons.FaFlag className='sidebarIcon'/>
                        Report
                    </li>
                    
                    {/* <li className='sidebarListItem'>
                        <FaIcons.FaUser className='sidebarIcon'/>
                        User
                    </li> */}
                </ul>
            </div>    
        </div>
    </div>
  )
}

export default Sidebar;
