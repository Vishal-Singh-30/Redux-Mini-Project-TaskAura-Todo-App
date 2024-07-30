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
  // usestate for Draggable card -> active card 
  const [activeCard, setActiveCard] = useState(null);

  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tasks));
  },[tasks]);

  // delete task
  const handleTaskDelete = (taskIndex)=>{
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  }

  const onDrop = (status, position)=> {
    console.log(`active card -: ${activeCard} going to ,status - : ${status}, at index ${position}`);
    if(activeCard== null || activeCard === undefined) return;

    const taskToMove = tasks[activeCard];
    const updatedTasks = tasks.filter((task, index)=> index !== activeCard);

    updatedTasks.splice(position, 0, {
      ...taskToMove, 
      status: status
    });
    setTasks(updatedTasks);
  };

  return (
  <div className="app">
    {/* app_header - TaskForm */}
    <TaskForm setTasks={setTasks}/>
    <div className="app_main">
      <TaskColumn title="To do" icon={todoIcon} tasks={tasks} status="todo" handleTaskDelete= {handleTaskDelete} setActiveCard = {setActiveCard} onDrop={onDrop} />
      <TaskColumn title="Doing" icon={doingIcon} tasks={tasks} status="doing" handleTaskDelete= {handleTaskDelete} setActiveCard = {setActiveCard} onDrop={onDrop} />
      <TaskColumn title="Done"  icon={doneIcon} tasks={tasks} status="done"handleTaskDelete= {handleTaskDelete} setActiveCard = {setActiveCard} onDrop={onDrop} />
    </div>
  </div>
)}

export default App;