import React, {useState, useEffect} from 'react'
import {habitTracker} from "./api"

const HabitTracker = () => {
    const [habitsData, setHabitsData] = useState([])
useEffect(()=>{
const habits = async ()=> {
    try{
        const response = await habitTracker('https://example.com/api/habits')
        const data = response.data.habits
        setHabitsData(data)
    }
    catch(error){
        console.error(error=>'Error: ' + error.message);
    }
}
    habits()
},[])

  return (
    <div>
            <ul>
                {
                    habitsData.map((habit)=>{
                        return <li>
                            <h4>{habit.title}</h4>
                            <p>{habit.desc}</p>
                            <p>Days Followed: {habit.daysFollowed}</p>
                            <p>Days Skipped: {habit.daysSkipped}</p>
                            <div>_______________________________________________________________________</div>
                        </li>
                    })
                }
            </ul>
    </div>
  )
}

export default HabitTracker
