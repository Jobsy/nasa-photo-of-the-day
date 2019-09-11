import React from "react";

export const Header = function (props) {


    return (
        <>
            <h1>Astronomy Picture of the Day</h1>
            <h2>{props.headerAndTitle}</h2>
        </>
    );
};