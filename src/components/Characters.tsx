import React from "react";
import { useQuery } from "@tanstack/react-query";
import { ICharacter } from "../models/Interfaces";
import { People } from "./People";

const URL = "https://akabab.github.io/starwars-api/api/all.json";
const fetchChar = async (): Promise<ICharacter[]> => {
    const res: Response = await fetch(URL);
    if (!res.ok) throw new Error(res.statusText);
    const data = await res.json();
    return [...data];
};

export const Characters = (): JSX.Element => {
    const { isLoading, error, data } = 
    useQuery(["characters"], fetchChar);

    if (isLoading) return <h1>Loading...</h1>;
    if (error instanceof Error) {
        return <h1>`Error ${error.message}`</h1>
    };

    return (
        <React.Fragment>
            {data!.map((character) => (
                <People 
                    key={character.id} 
                    character={character} 
                />
            ))}
        </React.Fragment>
    );
};

