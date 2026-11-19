import {usePoke} from '../../contexts/index';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export default function PickSpecies(){
    const navigate = useNavigate()
    const {species, setSpecies} = usePoke()
    console.log(species)

    function handleSubmit(e){
        e.preventDefault()
        const data = new FormData(e.target)
        const specie = data.get('specie')
        setSpecies(specie)
        navigate('/variety-loading')

    }
    
    return(
        <>
            <h1>Pick Your Species 🧌</h1>
            
            <ul>
                {species.map((specie, i) => 
                    (<li key={i}> {specie.pokemon_species.name }</li>)
                )}

            </ul>
            <br />
            <Form onSubmit={handleSubmit}>
                <InputGroup size="lg">
                    <Form.Label htmlFor="basic-url">Type Your Choice of Species: </Form.Label>
                    <InputGroup.Text id="inputGroup-sizing-lg">Specie</InputGroup.Text>
                    <Form.Control
                    name='specie'
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    />
                </InputGroup>
                <Button className="w-50" variant="primary" size="lg" type='submit'>
                        Next
                </Button>
            </Form>
        </>
    )
}