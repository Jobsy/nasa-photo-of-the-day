import React from "react";


export const Footer = function (props) {


    return (
        <>
            <div className="footer">
                <h2>{props.footerCopyright}</h2>
                <h3>{props.footerDate}</h3>
            </div>
        </>
    );
};