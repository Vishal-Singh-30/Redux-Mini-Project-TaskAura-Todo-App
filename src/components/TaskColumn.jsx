import "./TaskColumn.css";
import TaskCard from "./TaskCard";
import DropArea from "./DropArea";
import React from "react";

function TaskColumn({title, icon, tasks, status, handleTaskDelete, setActiveCard, onDrop}){

    return (
        <div className="task_column">
            <h1 className="task_column_heading"><img className="task_column_icon" src={icon} alt="Check img" />{title}</h1>
            <DropArea onDrop={()=>{onDrop(status, 0)}} />
            {
                tasks.map((task, index) => {
                    return task.status === status &&
                    <React.Fragment key={index}>
                     <TaskCard 
                      title={task.task}
                       tags = {task.tags}
                        handleTaskDelete={handleTaskDelete}
                         index={index} 
                         setActiveCard={setActiveCard}
                     />
                    <DropArea onDrop={()=>{onDrop(status, index + 1)}}/>
                    </React.Fragment>
            })
            }
        </div>
    )
}


export default TaskColumn;