import React from "react";

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
                <div className="header">
                    <h2>{props.headerTitleAndInput}</h2>
                    <input type="text" value={props.query} onChange={props.setQuery} />
                    {/* <input value={query} onChange={e => setQuery(e.target.value)} /> */}
                </div>
            </>
        );
    }
};