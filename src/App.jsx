import React, {useSate, useContext, useEffect} from "react";
import {Routes, Route} from 'react-router-dom';
import NavBar from "./NavBar";
import { Home, PickGender, PickSpecies, VarietyLoading, YourPokemonIs, PokemonStats, PokemonCollection, ContactUs } from "./pages/index";
import './App.css';

export default function App(){
    return(
        <>
        <Routes>
            <Route path='/' element={<NavBar/>}>
                <Route index element={<Home />}></Route>
                <Route path='/pick-gender'>
                    <Route index element={<PickGender/>}></Route>
                </Route>
                <Route path='pick-species'>
                    <Route index element={<PickSpecies/>}></Route>
                </Route>
                <Route path="variety-loading">
                    <Route element={<VarietyLoading/>}></Route>
                </Route>
                <Route path='your-pokemon-is'>
                    <Route index element={<YourPokemonIs/>}></Route>
                </Route>
                <Route path="pokemon-stats">
                    <Route index element={<PokemonStats/>}></Route>
                </Route>
                <Route path='/pokemon-collection'>
                    <Route index element={<PokemonCollection/>}/>
                </Route>
                <Route path="/contact-us">
                    <Route index element={<ContactUs/>}/>
                </Route>
                <Route path="*" element={<h1>Not found</h1>}></Route>
            </Route>


        </Routes>
      
        </>
    )
}