import {useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import './PickGender.css'

export default function PickGender(){
    const [gender, setGender] = useState('0')
    const [species, setSpecies] = useState()


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
    
    useEffect(() => {
        if (gender === '0') return;
        getSpeciesByGender();}, [gender]);
    


    return(
    <>
        <div className='outer'>
            <div className='App'>
                <Form.Select  size='lg' value={gender} onChange={e => setGender(e.target.value)}>
                        
                        <option>Select any fruit</option>
                        <option value='1'>Female</option>
                        <option value="2">Male</option>
                        <option value="3">Genderless</option>
                   
                </Form.Select> 
               
            </div> 
        </div>   
        <div>
          
        </div>     
    </>
   
)}