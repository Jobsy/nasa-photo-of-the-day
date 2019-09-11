import React from "react";



export const Body = function (props) {


    return (
        <>
            <img src={props.imgSrc} />
            <p>{props.paragrarph}</p>
        </>
    );
};