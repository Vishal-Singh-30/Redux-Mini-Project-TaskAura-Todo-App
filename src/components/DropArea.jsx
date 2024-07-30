import React,{ useState } from "react";
import "./DropArea.css";



function DropArea({onDrop}) {
    // state variable for showing drop area when card is active !
    const [showDrop, setShowDrop] = useState(false);

    return (
        <div 
        onDragEnter={() => setShowDrop(true)}
        onDragLeave={() => setShowDrop(false)} 
        onDrop={()=>{
            onDrop();
            // hide drop area after card has been droped
            setShowDrop(false);
        }}
        onDragOver={e => e.preventDefault()}
        className= {showDrop ? "drop_area" : "hide_drop"}>
            Drop Here
        </div>
    );
};

export default DropArea;