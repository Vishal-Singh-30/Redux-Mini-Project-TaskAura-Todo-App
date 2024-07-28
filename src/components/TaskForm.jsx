import "./TaskForm.css";
import Tag from "./Tag";
import { useState } from "react";
import TaskAura from "../assets/TaskAuraLogo.png";

function TaskForm({setTasks}){

    const [taskData, setTaskData] = useState({
        task: "",
        status: "todo",
        tags: []
    });

    const checkTag = (tag)=>{
        return taskData.tags.some(item => item === tag)
    }

    const selectTag = (tag)=>{
        if(taskData.tags.some((item) => item === tag)){
           const filterTags =  taskData.tags.filter((item)=> item !== tag)
           setTaskData((prevVal) => {
            // important line !
            return{...prevVal, tags: filterTags}
           })
        
        }else{
            // if the tag is not already in the tags array !
            setTaskData((prevVal) => {
                // important line !
                return{...prevVal, tags: [...prevVal.tags, tag]};
            
        })
    }

    };

    

    const handleChange = (event)=>{
        // const {name, value} = event.target;
        const name = event.target.name;
        const value = event.target.value;
       
        setTaskData((prevVal) => {
            // important line !
            return{...prevVal, [name]: value};
        })
    };

    const handleSubmit = (event)=> {
        event.preventDefault();
        console.log(taskData);
        setTasks(prevVal=> {
            return [...prevVal, taskData];
        });
        setTaskData({
            task: "",
            status: "todo",
            tags: []
        });
    };

    

    // // state varibale for form input ! 
    // let[task, setTask] = useState("");

    // // event handler + setTask function caller!
    // let handleTaskChange = (e) => {
    //     setTask(e.target.value);
    // };

    // // event handler + setStatus function caller!
    // let handleStatusChange = (e) => {
    //     setStatus(e.target.value);
    // };

    // // state variable for dropdowm (select)
    // let [status, setStatus] = useState("todo");

    // console.log(task);
    // console.log(status);

    return (
        <div className="app_header">
        <div className="project_logo">
            <img src={TaskAura} />
        </div>
        <form className="taskform" onSubmit={handleSubmit}>
            <input type="text" className="task_input" placeholder="Enter your task" name="task" onChange={handleChange} value={taskData.task} />
            <div className="task_form_bottom_section">
                <div className="tag_section">
                <Tag tagName="HTML" selectTag={selectTag} selected={checkTag("HTML")}/>
                <Tag tagName="CSS" selectTag={selectTag} selected={checkTag("CSS")}/>
                <Tag tagName="JavaScript" selectTag={selectTag} selected={checkTag("JavaScript")}/>
                <Tag tagName="React" selectTag={selectTag} selected={checkTag("React")}/>
                </div>
                
                <div>
                <select className="task_status" name="status" onChange={handleChange} value={taskData.status}>
                    <option value="todo">To do</option>
                    <option value="doing">Doing</option>
                    <option value="done">Done</option>
                </select>

                <button type="submit" className="task_submit">+ Add Task</button>
                </div>
            
            </div>
        </form>
    </div>
    )
}


export default TaskForm;