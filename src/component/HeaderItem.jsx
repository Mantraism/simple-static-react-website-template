import React from "react"; 

function HeaderItem({title, logo}){

    return(

        <div className="header-item">
            <div className="logo-container">
                <img className="logo" src={logo} alt={logo} width={"100%"} height={"100%"}/>
            </div>
            <div className="title">
                <h1 className="tomorrow-bold">{title}</h1>
            </div>
        </div>
    )
}

export default HeaderItem;