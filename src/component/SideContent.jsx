import React from "react";

function SideContent({title, content}){
    return (
        <div className="side-content"> 
            <div className="tomorrow-semibold">
                <h1>{title}</h1>
            </div>
            <div className="tomorrow-regular">
                <p>{content}</p>
            </div>
        </div>
    );
}

export default SideContent;