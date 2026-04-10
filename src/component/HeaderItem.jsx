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
            <div className="navbar">
                <nav className="tomorrow-semibold">
                    <a className="active" href="index.html">Home</a>
                    <a href="#news">News</a>
                    <a href="#contact">Contact</a>
                    <a href="pages/about.html" target="_blank">About</a>
                </nav>
            </div>
            <div className="wrapper">
            <div className="marquee">
                <p className="tomorrow-regular">running text running text running text running text running text running text running text running text running text running text running text running text running text running text 
                </p>
                <p className="tomorrow-regular">running text running text running text running text running text running text running text running text running text running text running text running text running text running text 
                </p>
            </div>
            </div>

        </div>
    )
}

export default HeaderItem;