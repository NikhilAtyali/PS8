import React, {useState, useEffect} from 'react'
import { followApi } from './api'
const Follow = () => {
    const [userData, setUserData] = useState({})
    const [followerCount, setFollowerCount] = useState(0)
    useEffect(()=>{
        const fetchUserData = async ()=>{
            const userResponse = await followApi('https://example.com/api/profile')
            try{
                const data = userResponse.data.profile;
                setUserData(data)
                setFollowerCount(data.followers)
            }
            catch(error){
                console.error(error.message)
            }
        }
        fetchUserData()
    },[])

    const followeBtn =()=>setFollowerCount(followerCount + 1)
  return (
    <div>
        <h2>{userData.name}</h2>
        <p>Age: {userData.age}</p>
        <p>Gender: {userData.gender}</p>
        <p>Email: {userData.email}</p>
        <p>Occupation; {userData.occupation}</p>
        <p>Followers: {followerCount}</p>
        <p>Followed By: {userData.followedBy}</p>
        <button onClick={followeBtn}>Follow {userData.name} </button>
    </div>
  )
}

export default Follow
