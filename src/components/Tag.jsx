import "./Tag.css";


function Tag({tagName, selectTag , selected}){
    const tagStyle = {
        HTML: {backgroundColor: "#fda821"},
        CSS: {backgroundColor: "#15d4c8"},
        JavaScript: {backgroundColor: "#ffd12c"},
        React: {backgroundColor: "#4cdafc"},
        default: {backgroundColor: "#f9f9f9"},
    };
    return (
        <div>
            <button type="button" className="tag" style={ selected ? tagStyle[tagName] : tagStyle.default} onClick={()=>selectTag(tagName)}>{tagName}</button>
        </div>
    )
};


export default Tag;