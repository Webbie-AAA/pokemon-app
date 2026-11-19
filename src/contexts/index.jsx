import React, { useState, useContext, createContext } from "react";

const PokeContext = createContext();

export const PokeProvider = ({children}) => {
    const [gender, setGender] = useState('');
    const [species, setSpecies] = useState([]);
    const [variant, setVariant] = useState('');
    const [specie, setChosenSpecie] = useState('');
    const [finalForm, setFinalForm] = useState({});

    return (
        <PokeContext.Provider value={{gender, setGender, species, setSpecies, specie, setChosenSpecie, variant, setVariant, finalForm, setFinalForm}}>
            {children}
        </PokeContext.Provider>
    );
};

export const usePoke = () => useContext(PokeContext);