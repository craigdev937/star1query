import React from "react";
import "./People.css";
import { ICharacter } from "../models/Interfaces";

type PEO = {
    character: ICharacter
};

export const People = 
({character}: PEO): JSX.Element => {
    return (
        <React.Fragment>
            <main key={character.id}>
                <h1>{character.name}</h1>
                <p>Affiliations: {character.affiliations}</p>
                <p>Any cybernetics?  {character.cybernetics}</p>
                <img src={character.image} alt={character.name} />
                <a href={character.wiki}>Wiki</a>
            </main>
        </React.Fragment>
    );
};

