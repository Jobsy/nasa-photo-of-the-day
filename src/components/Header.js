
import React from "react";
import { HeaderStyle, InputStyle } from "./style.js"


export const Header = function (props) {

    if (!props.headerTitleAndInput) {
        if (props.error === 404) {
            return <h3>Sorry, can't fetch data. Check your address and resend</h3>;
        }
        return <h3>Loading...</h3>;
    }
    else {
        return (
            <>
                {/* <div className="header"> */}
                <HeaderStyle>
                    <h2>{props.headerTitleAndInput}</h2>
                    <InputStyle type="text" value={props.query} onChange={props.setQuery} />
                </HeaderStyle>
                {/* </div> */}
            </>
        );
    }
};