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
        </div>

    )
}

export default Header;
