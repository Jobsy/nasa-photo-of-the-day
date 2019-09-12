
import React from "react";
import { FooterStyle } from "./style.js"


export const Footer = function (props) {

    return (
        <>
            {/* <div className="footer"> */}
            <FooterStyle>
                <h2>{props.footerCopyright}</h2>
                <h3>{props.footerDate}</h3>
                {/* </div> */}
            </FooterStyle>
        </>
    );
};