
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    
    const userString = localStorage.getItem("user");
    if (userString) {
      const userData = JSON.parse(userString);
      setUser(userData);
    } else {
     
      navigate("/signin");
    }
  }, [navigate]);

  if (!user) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="profile-container">
      <h1>Welcome, {user.username}!</h1>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Profile;
