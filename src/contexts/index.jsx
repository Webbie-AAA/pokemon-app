import React, { useState, useContext, createContext } from "react";

const PokeContext = createContext();

export const PokeProvider = ({children}) => {
    const [gender, setGender] = useState();
    const [species, setSpecies] = useState();
    const [specie, setSpecie] = useState()
    const [variety, setVariety] = useState();

    return (
        <PokeContext.Provider value={{gender, setGender, specie, setSpecie, species, setSpecies, variety, setVariety}}>
            {children}
        </PokeContext.Provider>
    );
};

export const usePoke = () => useContext(PokeContext);