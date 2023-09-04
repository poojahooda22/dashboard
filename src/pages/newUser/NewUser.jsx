import React from 'react'
import './NewUser.css';



function NewUser() {
  return (
    <div className='newUser'>
      <h1 className='newUserTitle'> New User</h1>
      <form className='newUserForm'>
        <div className='newUserItem'>
            <label>Username</label>
            <input type="text" placeholder="Demi" />
        </div>
        <div className='newUserItem'>
            <label>Full Name</label>
            <input type="text" placeholder="Demi Wikinson" />
        </div>
        <div className='newUserItem'>
            <label>Email</label>
            <input type="text" placeholder="Demiwiki986@gmail.com" />
        </div>
        <div className='newUserItem'>
            <label>Password</label>
            <input type="text" placeholder="password" />
        </div>
        <div className='newUserItem'>
            <label>Mobile Number</label>
            <input type="number" placeholder="+91 9835648267" />
        </div>
        <div className='newUserItem'>
            <label>Address</label>
            <input type="text" placeholder="Vashant Vihar | New Delhi" />
        </div>
        <div className='newUserItem'>
            <label>Gender</label>
            <div className='newUserGender'>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="others" value="others" />
            <label for="others">Others</label>
            </div>    
        </div>
        
        <div className='newUserItem'>
            <label>Active</label>
            <select className='newUserSelect' name='active' id='active'>
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
        </div>
        
      </form>
      <button className='newUserButton'>Create</button>
    </div>
  )
}

export default NewUser
