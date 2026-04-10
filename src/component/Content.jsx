import React from "react";
import MainContent from "./MainContent"
import SideContent from "./SideContent"

function Content(){
    return (
    <div className="content">
        <MainContent title="Main Content Title" content="This is the main content." />
        <SideContent title="Side Content Title" content="This is the side content." />
    </div>
    ); 
}

export default Content;