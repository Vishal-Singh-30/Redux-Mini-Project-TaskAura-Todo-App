import "./TaskColumn.css";
import TaskCard from "./TaskCard";

function TaskColumn({title, icon, tasks, status, handleTaskDelete}){
    return (
        <div className="task_column">
            <h2 className="task_column_heading"><img className="task_column_icon" src={icon} alt="Check img" />{title}</h2>
            {
                tasks.map((task, index) => {
                    return task.status === status && <TaskCard key={index} title={task.task} tags = {task.tags} handleTaskDelete={handleTaskDelete} index={index}/>
            })
            }
        </div>
    )
}


export default TaskColumn;