import React from 'react'
import './User.css';
import User1 from '../../assets/User1.png'; 
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';

function User() {
  return (
    <div className='user'>
      <div className='userTitleContainer'>
        <h2 className='userTitle'>Edit User</h2>
        <Link to='/newUser'>
            <button className='userAddButton'>Create</button>
        </Link>
      </div>
      <div className='userContainer'>
        <div className='userShow'>
            <div className='userShowTop'>
                <img src={User1} alt="" className='userShowImg'/>
                <div className='userShowTopTitle'>
                    <span className='userShowUsername'>Demi Wikinson</span>
                    <span className='userShowUserTitle'>Software Engineer</span>
                </div>
            </div>
            <div className='userShowBottom'>
                <span className='userShowTitle'>Account Details</span>
                <div className='userShowInfo'>
                    <FaIcons.FaUser className='userShowIcon'/>
                    <span className='userShowInfoTitle'>demiwiki897</span>
                </div>
                <div className='userShowInfo'>
                    <FaIcons.FaCalendar className='userShowIcon'/>
                    <span className='userShowInfoTitle'>12.12.1999</span>
                </div>
                <span className='userShowTitle'>Contact Details</span> 
                <div className='userShowInfo'>
                    <FaIcons.FaPhone className='userShowIcon'/>
                    <span className='userShowInfoTitle'>+91 9835648267</span>
                </div>
                <div className='userShowInfo'>
                    <FaIcons.FaEnvelope className='userShowIcon'/>
                    <span className='userShowInfoTitle'>demiwiki897@gmail.com</span>
                </div>
                <div className='userShowInfo'>
                    <FaIcons.FaAddressCard className='userShowIcon'/>
                    <span className='userShowInfoTitle'>Vashant Vihar | New Delhi</span>
                </div>
            </div>
        </div>
        <div className='userUpdate'>
            <span className='userUpdateTitle'>Edit</span>
            <form className='userUpdateForm'>
                <div className='userUpdateLeft'>
                    <div className='userUpdateItem'>
                        <label>UserName</label>
                        <input
                            type="text"
                            placeholder='demiwiki897'
                            className='userUpdateInput'
                        />
                    </div>
                    <div className='userUpdateItem'>
                        <label>Date of Birth</label>
                        <input
                            type="number"
                            placeholder='12.12.1999'
                            className='userUpdateInput'
                        />
                    </div>
                    <div className='userUpdateItem'>
                        <label>Phone number</label>
                        <input
                            type="number"
                            placeholder='9835648267'
                            className='userUpdateInput'
                        />
                    </div>
                    <div className='userUpdateItem'>
                        <label>Email</label>
                        <input
                            type="text"
                            placeholder='demiwiki897@gmail.com'
                            className='userUpdateInput'
                        />
                    </div>
                    <div className='userUpdateItem'>
                        <label>Address</label>
                        <input
                            type="text"
                            placeholder='Vashant Vihar | New Delhi'
                            className='userUpdateInput'
                        />
                    </div>
                </div>
                <div className='userUpdateRight'>
                    <div className='userUpdateUpload'>
                        <img src={User1} alt="" className='userUpdateImg'/>
                        <label htmlFor="file"><FaIcons.FaUpload className='userUpdateIcon'/> </label>
                        <input type="file" id='file' style={{display: 'none'}} />
                    </div>
                    <button className='userUpdateButton'>Update</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
}

export default User;
