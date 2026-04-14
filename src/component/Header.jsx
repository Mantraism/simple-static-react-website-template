import React from "react";
import HeaderItem from "./HeaderItem";

function Header(){
    const title = "TITLE";
    const logo = new Image()
    logo.src = "../src/assets/Mantra.jpeg";


    return(
        <div className="sticky">
            <header>
                <HeaderItem
                    logo={logo.src}
                    title={title}
                />
            </header>
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

export default Header;
