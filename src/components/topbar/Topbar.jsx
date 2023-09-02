import React from 'react';
import './Topbar.css';
import logo1 from '../../assets/logo1.png';
import * as FaIcons from 'react-icons/fa';
import Avatar from '../../assets/Avatar.png';


function Topbar() {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='topLeft'> 
                <img alt="" src={logo1}/>
                <span className='logo'>Untitled UI</span>
            </div>
            <div className='topRight'>
                <div className='topbarIconContainer'>
                    <FaIcons.FaBell className='topIconBell'/>
                    <span className='topIconBadge'>2</span>
                </div>
                
            
                <img src={Avatar} alt="avatar"  className='avatarUser'/>
            </div>
        </div>
      
    </div>
  )
}

export default Topbar;
