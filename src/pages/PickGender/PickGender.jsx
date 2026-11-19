import {useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import {usePoke} from '../../contexts/index'
import './PickGender.css'

export default function PickGender(){
    const navigate = useNavigate()
    const {gender, setGender, setSpecies} = usePoke()

        useEffect(() => {
            if (gender === '0') return;

        async function getSpeciesByGender(){
            try{
                const response = await fetch(`https://pokeapi.co/api/v2/gender/${gender}/`)
                const result = await response.json()
                const pokeSpecies = result.pokemon_species_details.slice(0,20)
                setSpecies(pokeSpecies)
            } catch(error){
                console.log(error);
            }
        }

        getSpeciesByGender()}, [gender, setSpecies])


    
    
    
    
    


    return(
    <>
        <div className='outer'>
            <div className='App'>
                <Form.Select  size='lg' value={gender} onChange={e => setGender(e.target.value)}>
                        
                        <option>Select Your Pokemon's Gender: </option>
                        <option value='1'>Female</option>
                        <option value="2">Male</option>
                        <option value="3">Genderless</option>
                   
                </Form.Select> 

                <Button className="w-50" variant="primary" size="lg" onClick={() => navigate('/pick-species')}>
                        Next
                </Button>
               
            </div> 
          
            
        </div>   
            
    </>
   
)}