import './YourPokemonIs.css'
import {usePoke} from '../../contexts'
import React, {useEffect, useState, useContext} from 'react';



export default function YourPokemonIs(){
    const {variant, finalForm, setFinalForm} = usePoke()

    async function getYourPoke(){
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${variant}`)
        const result = await response.json()
        setFinalForm(result.sprites.other)
    }

    useEffect(() => {getYourPoke()},[variant] )
    console.log(finalForm)
    return(
        <>
            <h1>YOUR POKEMON IS 👀!!!!!</h1>
            <div className="chosen-pokemon-page">
            <div className="chosen-pokemon-display">
                {finalForm?.dream_world?.front_default && (
                        <img src={finalForm.dream_world.front_default} alt={variant} />
                    )}
            </div>
        </div>
        </>
    )
}