import { useState, useEffect } from 'react';
import { usePoke } from '../../contexts/index';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';




export default function VarietyLoading(){
    const navigate = useNavigate()
    const { species, setVariety } = usePoke()
    const [varietyList, setVarietyList] = useState([])
   
    console.log(species)
    useEffect(() => {
        async function getVarieties(){
            try {
                console.log(species)
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${species}/`)
                const result = await response.json()
                console.log(result)
                setVarietyList(result.varieties)
            } catch(error){
                console.log(error)
            }
        }
        getVarieties()
    }, [species])

    function handleSubmit(e){
        e.preventDefault()
        if (varietyList.length === 1) {
            setVariety(varieties[0].pokemon.name)
        } else {
            setVariety(new FormData(e.currentTarget).get('variety'))
        }
        navigate('/your-pokemon-is')
    }

    return(
        
         
            <>
            {varietyList.length === 1
                ? <div>
                <h1>The species you chose is rare, there is only one that exists: </h1>
                    <h1>{varietyList[0].pokemon.name} </h1>
                </div>
                : <>
                    <h1>Pick Your Variety 🧌</h1>
                    <ul>
                        {varietyList.map((v) => <li key={v.pokemon.name}>{v.pokemon.name}</li>)}
                    </ul>
                  </>
            }

            <Form onSubmit={handleSubmit}>
                {varietyList.length > 1 &&
                    <InputGroup size="lg">
                        <Form.Label htmlFor="variety-input">Type Your Choice of Variety: </Form.Label>
                        <InputGroup.Text>Variety</InputGroup.Text>
                        <Form.Control id="variety-input" name="variety" />
                    </InputGroup>
                }
                <Button type="submit" className="w-50" variant="primary" size="lg">
                    Next
                </Button>
            </Form>
        </>
        
        
    )
}