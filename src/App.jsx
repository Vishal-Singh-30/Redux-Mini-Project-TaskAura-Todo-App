import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import todoIcon from "./assets/Target.png";
import doingIcon from "./assets/Rocket.png";
import doneIcon from "./assets/Check.png";
import { useState } from "react";
import { useEffect } from "react";


const oldTasks = localStorage.getItem("tasks")
console.log(oldTasks);

function App(){
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);

  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tasks));
  },[tasks]);

  // delete task
  const handleTaskDelete = (taskIndex)=>{
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  }

  console.log("task", tasks);
  return (
  <div className="app">
    {/* app_header - TaskForm */}
    <TaskForm setTasks={setTasks}/>
    <div className="app_main">
      <TaskColumn title="To do" icon={todoIcon} tasks={tasks} status="todo" handleTaskDelete= {handleTaskDelete}/>
      <TaskColumn title="Doing" icon={doingIcon} tasks={tasks} status="doing" handleTaskDelete= {handleTaskDelete}/>
      <TaskColumn title="Done"  icon={doneIcon} tasks={tasks} status="done"handleTaskDelete= {handleTaskDelete} />
    </div>
  </div>
)}

export default App;