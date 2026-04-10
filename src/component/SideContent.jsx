import React from "react";

function SideContent({title, content}){
    return (
        <div className="side-content"> 
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    );
}

export default SideContent;