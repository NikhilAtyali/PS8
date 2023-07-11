import React, { useEffect, useState } from "react";
import { archivesApi } from "./api";
const Archives = () => {
  const [habits, setHabits] = useState([]);
  const [showArchives, setShowArchives] = useState(false)
  useEffect(() => {
    const fetchArchives = async () => {
      const response = await archivesApi("https://example.com/api/habits");

      try {
        const data = response.data.habits;
        const unarchivedHabits = data.filter((habit) => !habit.archived);
        setHabits(unarchivedHabits);
      } catch (error) {
        error.log("error: " + error);
      }
    };
    fetchArchives()
  }, []);

  const archiveHandelr =()=>{
    const filteredData = habits.filter((habit)=>{
        return habit.archived == true
    })
    setHabits(filteredData)
    setShowArchives(!showArchives)
  }
  return (
    <>
        <h2>{showArchives ? "Archived" : "Unarchived"}</h2>
      <div>
        {habits.map((habit) => {
          return (
            <li>
              <h3>{habit.title}</h3>
              <h5>{habit.desc}</h5>
              <p>Days Followed: {habit.daysFollowed}</p>
              <p>Days Skipped: {habit.daysSkipped}</p>
            </li>
          );
        })}
      <button onClick={archiveHandelr}>{showArchives ? "Archive" : "Show Archives"}</button>
      </div>
    </>
  );
};

export default Archives;
