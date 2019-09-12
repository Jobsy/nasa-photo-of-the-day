import React from "react";

export const Header = function (props) {

    if (!props.headerAndTitle) {
        if (props.error === 404) {
            return <h3>Sorry, can't fetch data. Check your address and resend</h3>;
        }
        return <h3>Loading...</h3>;
    }
    else {
        return (
            <>
                {/* <h1>Astronomy Picture of the Day</h1> */}
                <h2>{props.headerAndTitle}</h2>
            </>
        );
    }
};