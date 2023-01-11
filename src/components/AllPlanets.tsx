import React from "react";
import { useQuery } from "@tanstack/react-query";
import { IPlanet } from "../models/Interfaces";
import { Planet } from "./Planet";

const fetchPlanets = async (): Promise<IPlanet[]> => {
    const URL = "https://swapi.py4e.com/api/planets";
    const res: Response = await fetch(URL);
    if (!res.ok) throw new Error(res.statusText);
    const data = await res.json();
    return [...data.results];
};

export const AllPlanets = (): JSX.Element => {
    const { isLoading, error, data } = 
    useQuery(["planets"], fetchPlanets);

    if (isLoading) return <h1>Loading...</h1>;
    if (error instanceof Error) {
        return <h1>`Error ${error.message}`</h1>
    };

    return (
        <React.Fragment>
            <h1>Planets</h1>
            {data!.map((planet) => (
                // <Planet key={planet.name} planet={planet} />
                <main key={planet.name}>
                    <h1>{planet.name}</h1>
                    <p>{planet.terrain}</p>
                    <p>{planet.population}</p>
                    <p>{planet.url}</p>
                    <p>{planet.residents}</p>
                    <p>{planet.films}</p>
                </main>
            ))}
        </React.Fragment>
    );
};

