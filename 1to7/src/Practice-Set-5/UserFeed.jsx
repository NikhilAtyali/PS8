// import { useState, useEffect } from "react";
import { fakeFetch4 } from "./fetchCalls";

// export const UserFeed = () => {
//     const [userData, setUserData] = useState([])
//     useEffect(()=>{
//         fakeFetch4("https://example.com/api/users")
//         .then(response=>setUserData(response.data))
//         .catch(console.error)
//     },[])
//     return(
//         <>
//             {userData.map((user)=>{
//                 return <div>
//                     <img src={userData.image} alt="image" />
//                     <h4>{user.name}</h4>
//                     <h4>{userData.likes}</h4>
//                     <h4>{userData.comments}</h4>
//                 </div>
//             })} 
//         </>
//     )
// }
import React, { useState, useEffect } from 'react';

export const UserFeed = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fakeFetch4('https://example.com/api/users')
      .then((response) => {
        setUsers(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <img src={user.image} alt={user.name} />
            <p>Name: {user.name}</p>
            <p>Likes: {user.likes}</p>
            <p>Comments: {user.comments}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

