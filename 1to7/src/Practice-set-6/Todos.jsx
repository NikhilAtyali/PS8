import React, { useEffect, useState } from "react";
import { todoapi } from "./api";
("https://example.com/api/todos");
const Todos = () => {
  const [tasks, setTasks] = useState([]);
  const [subtasks, setSubtasks] = useState([]);
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await todoapi("https://example.com/api/todos");
        const todoData = response.data.todos;
        setTasks(todoData);
        setSubtasks(todoData.todos);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTodos();
  }, []);
  return (
    <div>
      <ul>
        {tasks.map((task) => {
          return (
            <li>
              <h4>
                {task.title}: {task.desc}
              </h4>
              <ol>
                {task.todos.map((task) => {
                  return <li>{task}</li>;
                })}
              </ol>
            </li>
          );
        })}
        <ol>{}</ol>
      </ul>
    </div>
  );
};

export default Todos;
