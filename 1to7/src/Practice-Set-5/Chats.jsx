import React, { useState, useEffect} from 'react'
import { fakeFetch5 } from './fetchCalls'

const Chats = () => {
    const [chatsData, setChatsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, seterror] = useState(null)

    useEffect(()=>{
        fakeFetch5('https://example.com/api/userchat')
        .then(response=>{
            setChatsData(response.data);
            setIsLoading(false);
        })
        .catch((error)=>{
            seterror(error.message);
            setIsLoading(false);
        })
    },[])

    if(isLoading){
        return<div>...Loading</div>
    }
    if(error){
        return<div>Error: {error}</div>
    }
  return (
    <div>
      <h1>User Chats</h1>
      <ul>
        {
            chatsData.map((user,index)=>{
             return   <li key={index}>
                    <h3>{user.name}'s Chat:</h3>
                    <p>{user.messages[0].from}:{user.messages[0].message}</p>
                    <p>{user.messages[1].from}:{user.messages[1].message}</p>
                </li>
            })
        }
      </ul>
    </div>
  )
}

export default Chats
