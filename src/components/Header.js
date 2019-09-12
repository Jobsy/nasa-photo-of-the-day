import React from "react";

export const Header = function (props) {

    if (!props.headerAndTitle) {
        return <h3>Loading...</h3>;
    }
    else {
        return (
            <>
                <h1>Astronomy Picture of the Day</h1>
                <h2>{props.headerAndTitle}</h2>
            </>
        );
    }
};