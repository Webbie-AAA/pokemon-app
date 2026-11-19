import { useState, useEffect } from 'react';
import { usePoke } from '../../contexts/index';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import './VarietyLoading.css'

export default function VarietyLoading(){
    const navigate = useNavigate()
    const { specie, setVariant, variant} = usePoke()
    const [variantList, setVariantList] = useState([])
   

    useEffect(() => {
    async function getSpecieVariants(){
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${specie}/`);
        const result = await response.json();
        setVariantList(result.varieties)
    }
  
    getSpecieVariants()
    
}, [specie])

    console.log(variantList) //variant loads outside the function
  
   
        // setVarietyList(variant.varieties[0].pokemon.name)


    return(
            <>
            <div className='pick-variant-page'>
                <h1> Select A Species Variant</h1>

                <div className='pick-variant-layout'>
                    <div className='todo-container'>
                        <ul className='todo-list'>
                            {variantList.map((poke, i) => 
                                (<li className='todo' key={i} onClick={() => setVariant(poke.pokemon.name)}>{poke.pokemon.name}</li>)
                            )}

                        </ul>
                    </div>
                    <div className='pick-variant-right'>
                        <div className="selected-variant">
                            {variant}
                        </div>
                    
                        <Button
                        className="w-50"
                        variant="primary"
                        size="lg"
                        type="submit"
                        onClick={() => navigate('/your-pokemon-is')}>
                                                                
                        Next
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}