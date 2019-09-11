import React from "react";


export const Footer = function (props) {


    return (
        <>
            <h4>{props.footerCopyright}</h4>
            <h3>{props.footerDate}</h3>
        </>
    );
};