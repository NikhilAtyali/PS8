import React, { useState, useEffect } from "react";
import { userProfileApi } from "./api";
const UserProfile6 = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await userProfileApi("https://example.com/api/profile");
      try {
        const data = response.data.profiles;
        setUserData(data);
      } catch (error) {
        console.error("error: " + error);
      }
    };
    fetchUserData();
  }, []);
const updateNameHandeler=()=>{
   const updateUserData =  {...userData, name : "Emily"}
   setUserData(updateUserData)
}
  return (
    <div>
        
            <ul>
          <li>
            <p>name: {userData.name}</p>
            <p>Email:{userData.age} </p>
            <p>Age:{userData.gender}</p>
            <p>Gender: {userData.email}</p>
            <p>Occupation: {userData.occupation}</p>
          </li>
          </ul>
        <button onClick={updateNameHandeler}>Update Name</button>
      
    </div>
  );
};

export default UserProfile6;
