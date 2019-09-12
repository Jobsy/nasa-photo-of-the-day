import React from "react";



export const Body = function (props) {


    return (
        <>
            <img src={props.imgSrc} alt = "photoOfTheDay"/>
            <p>{props.paragrarph}</p>
        </>
    );
};