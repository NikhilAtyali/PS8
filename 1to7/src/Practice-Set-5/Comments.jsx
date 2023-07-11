import React, {useState, useEffect} from 'react'
import { fakeFetch6 } from './fetchCalls'

const Comments = () => {
    const [comments, setComments] = useState([]);
    // const [filteredArray, setFilteredArray] = useState(comments)
    useEffect(()=>{
        fakeFetch6('https://example.com/api/comments')
        .then(response=>{
            const commentsArray = response.data.comments
            setComments(commentsArray)
            console.log({commentsArray  })
        })
        .catch(error=>console.log(error))
    },[])

    // const handleDeleteComment = (index) => {
    //     setComments((prevComments) => {
    //       const updatedComments = [...prevComments];
    //       updatedComments.splice(index, 1);
    //       return updatedComments;
    //     });
    //   };
    // const handleDeleteComment = (index) => {
    //     setComments((prevComments) => {
    //       const updatedComments = prevComments.filter((_, i) => i !== index);
    //       return updatedComments;
    //     });
    //   };
      
    
      const handleDeleteComment = (index) => {
        setComments((prevComments) => {
          const updatedComments = prevComments.filter((comment) => comment.text !== index);
          return updatedComments;
        });
      };
  return (
    <div>
      <ul>
        {
            comments.map((user)=>{
             return   <li key={user.text}>
                    <h3>{user.name}</h3>
                    <p>{user.text}</p>
                    <button onClick={()=>handleDeleteComment(user.text)}>Delete</button>
                </li>
            })
        }
      </ul>
    </div>
  )
}

export default Comments
