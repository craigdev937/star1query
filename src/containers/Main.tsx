import React from "react";
import { Navbar } from "./Navbar";
import { Characters } from "../components/Characters";
import { Films } from "../components/Films";

export const Main = (): JSX.Element => {
    const [page, setPage] = React.useState("characters");

    return (
        <React.Fragment>
            <h1>Star Wars Info</h1>
            <Navbar setPage={setPage} />
            <main className="content">
                <Characters />
                <Films />
            </main>
        </React.Fragment>
    );
};


