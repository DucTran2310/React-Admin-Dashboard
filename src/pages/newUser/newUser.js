import React from 'react'

import './newUser.css'

const newUser = () => {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="Enter your name" />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="Enter your full name" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
        </div>
        <div className="newUserItem">
          <label>Telephone</label>
          <input type="text" placeholder="Enter your phone" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="Enter your address" />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label htmlFor="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label htmlFor="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  )
}

export default newUser
