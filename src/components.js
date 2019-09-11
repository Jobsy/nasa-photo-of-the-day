import React from "react";


function HomePage(props) {
    // debugger

    return (
        
        <div>
            <h1>{props.pageTitle}</h1>
            <div>
                <img src={props.imgSrc} />
            </div>
        </div>
    );
}


export default HomePage;
