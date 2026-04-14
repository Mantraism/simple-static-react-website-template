import React from "react";
import MainContent from "./MainContent"
import SideContent from "./SideContent"

function Content(){
    const SideContentTitle = "Side Content Title";
    const MainContentTitle = "Main Content Title";
    const SideContentContent = "When I was young, younger than before \n I never saw the truth hanging from the door \n And now I'm older, see it face to face \n And now I'm older, gotta get up, clean the place \n And I was green, greener than the hill \n Where flowers grow and the sun shone still \n Now I'm darker than the deepest sea \n Just hand me down, give me a place to be \n And I was strong, strong in the sun \n I thought I'd see when day was done \n Now I'm weaker than the palest blue \n Oh, so weak in this need for you";
    const MainContentContent = "When I was young, younger than before \n  I never saw the truth hanging from the door \n And now I'm older, see it face to face \n And now I'm older, gotta get up, clean the place \n And I was green, greener than the hill \n Where flowers grow and the sun shone still \n Now I'm darker than the deepest sea \n Just hand me down, give me a place to be \n And I was strong, strong in the sun \n I thought I'd see when day was done \n Now I'm weaker than the palest blue \n Oh, so weak in this need for you";


    return (
    <div className="content">
        <div className="flex-container">
            <SideContent title={SideContentTitle} content={SideContentContent} />
            <MainContent title={MainContentTitle} content={MainContentContent} />
            <SideContent title={SideContentTitle} content={SideContentContent} />
        </div>
    </div>
    ); 
}

export default Content;