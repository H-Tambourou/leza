import React from 'react';
import "./Top.css"
const intro = "We live on a green dot. A green dot that has such little importance when we consider the grandeur of space. But this green dot is our world. But look up! Do you see it? The void unfolding itself, full of mysteries.";
const Top = () => {
return (
    <div className="top">
    <header> 
        <h1 className= "Name">Leza</h1>
    </header>
    <p>{intro}</p>
    </div> 
)
};
export default Top;