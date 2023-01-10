import React from "react";
import { Navbar } from "./Navbar";
import { Planets } from "../components/Planets";
import { People } from "../components/People";
import { Films } from "../components/Films";

export const Main = (): JSX.Element => {
    const [page, setPage] = React.useState("planets");

    return (
        <React.Fragment>
            <h1>Star Wars Info</h1>
            <Navbar setPage={setPage} />
            <main className="content">
                <Planets />
                <People />
                <Films />
            </main>
        </React.Fragment>
    );
};


