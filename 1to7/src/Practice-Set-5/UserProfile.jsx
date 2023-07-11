import { useState, useEffect } from "react";
import { fakeFetch3 } from "./fetchCalls";
const UserProfile = ({ heading, height, width }) => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fakeFetch3("https://example.com/api/user")
      .then((Response) => {
        const userDataObj = Response.data;
        setUserData(userDataObj);
      })
      .catch((error) => console.log(error.message));
  }, []);
  return (
    <div>
      <h3>{heading}</h3>
      <img src={userData.image} alt="Image" height={height} width={width} />
      <h4>Name: {userData.name}</h4>
      <h4>Likes: {userData.likes}</h4>
      <h4>Comments: {userData.comments}</h4>
    </div>
  );
};
export default UserProfile;
