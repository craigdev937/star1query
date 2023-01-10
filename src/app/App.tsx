import React from "react";
import "./App.css";
import man from "@public/man.avif";

export const App = (): JSX.Element => {
    return (
        <React.Fragment>
            <img 
                src={man} alt="Urban man" 
                height="500px" width="auto"
            />    
        </React.Fragment>
    );
};


