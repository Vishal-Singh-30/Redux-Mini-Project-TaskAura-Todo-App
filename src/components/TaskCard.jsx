import "./TaskCard.css";
import Tag from "./Tag";
import deleteIcon from "../assets/Delete.png";


function TaskCard({title, tags, handleTaskDelete, index}) {
    return (
        <div className="task_card">
            <p className="task_text">{title}</p>

            <div className="task_card_bottom_section">
                <div className="task_card_tags">
                {
                    tags.map((tag,index)=>{
                        return <Tag key={index} tagName={tag} selected/>
                    })
                }
                </div>
                <div className="task_delete" onClick={()=> handleTaskDelete(index)}>
                <img className="delete_icon" src={deleteIcon} />
                </div>
            </div>
        </div>
    )
}


export default TaskCard;