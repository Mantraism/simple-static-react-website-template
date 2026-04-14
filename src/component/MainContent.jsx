import React from 'react';

function MainContent({title, content}){
    return (
        <div className='main-content'>
            <div className="tomorrow-semibold">
                <h1>{title}</h1>
            </div>
            <div className="tomorrow-regular">
                <p>{content}</p>
            </div>
        </div>
    );
}

export default MainContent;