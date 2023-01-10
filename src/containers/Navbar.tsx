import React from "react";

type NAV = {
    setPage: Function
};

export const Navbar = ({setPage}: NAV): JSX.Element => {
    return (
        <React.Fragment>
            <nav>
                <button
                    onClick={() => setPage("people")}
                    >Films
                </button>
                <button
                    onClick={() => setPage("planets")}
                    >Planets
                </button>
                <button
                    onClick={() => setPage("films")}
                    >People
                </button>
            </nav>
        </React.Fragment>
    );
};


