import React, {useState, useEffect} from 'react'
import { randomQuotesApi } from './api'
const RandomQuotes = () => {
    const [quotes, setQuotes] = useState({})

    useEffect(()=>{
        fetchQuotes()
    },[])
    const fetchQuotes = () =>{
        randomQuotesApi()
        .then(response=>{
            setQuotes(response)
        })
        .catch((error)=>console.log(error))
    }
  return (
    <div>
        <h4>{quotes.content}</h4>
        <p>{quotes.author}</p>
        <button onClick={fetchQuotes}>Show Quotes</button>
    </div>
  )
}

export default RandomQuotes
