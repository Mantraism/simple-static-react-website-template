import React from 'react';

function MainContent({title, content}){
    return (
        <div className='main-content'>
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    );
}

export default MainContent;