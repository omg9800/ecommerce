import React, { useState, useEffect } from "react";
import "./profile.css";
function Profile() {
  const [user, setUser] = useState(null);

  useEffect(async () => {
    let user = await localStorage.getItem("user");
    user = JSON.parse(user);
    console.log(user);
    setUser(user);
  }, []);

  return (
    <div className="profile-container">
      <h3 className="center-bold">User Details</h3>
      <ul>
        <li id="profile-details">
          <label htmlFor="firstname">FirstName</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            value={user?.name?.firstname}
          />
        </li>
        <li id="profile-details">
          <label htmlFor="lastname">LastName</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            value={user?.name?.lastname}
          />
        </li>
        <li id="profile-details">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" value={user?.email} />
        </li>
        <li id="profile-details">
          <label htmlFor="phone">Mobile</label>
          <input type="text" name="phone" value={user?.username} id="phone" />
        </li>
      </ul>
    </div>
  );
}

export default Profile;
