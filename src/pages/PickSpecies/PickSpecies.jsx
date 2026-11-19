
import {usePoke} from '../../contexts/index';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import './PickSpecies.css'

export default function PickSpecies(){
    const navigate = useNavigate()
    const {species, setChosenSpecie, specie} = usePoke()

    
return (
    <div className="pick-species-page">
        <h1>Select A Species </h1>

        <div className="pick-species-layout">

            <div className="todo-container">
                <ul className="todo-list">
                    {species.map((specie, i) =>
                        (<li className="todo" key={i} onClick={() => setChosenSpecie(specie.pokemon_species.name)}> {specie.pokemon_species.name} </li>)
                    )}
                </ul>
            </div>

            <div className="pick-species-right">
                <div className="selected-species">
                    {specie}
                </div>

                <Button
                    className="w-50"
                    variant="primary"
                    size="lg"
                    type="submit"
                    onClick={() => navigate('/variety-loading')}
                >
                    Next
                </Button>
            </div>

        </div>
    </div>
)

}
