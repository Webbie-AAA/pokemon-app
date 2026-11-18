import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export default function GeneralCard({path}){
    const navigate = useNavigate();
    return(
        <>

   <Container fluid className="px-5 my-4">
  <Card className="w-100 shadow-sm start-game" style={{ minHeight: "calc(100vh - 56px - 4rem)" }}>
    <Card.Body className="p-4 d-flex flex-column justify-content-center align-items-center text-center">
      <Card.Title><h1>Generate A Custom Pokemon</h1></Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Click Button to Play</Card.Subtitle>
      <Card.Text>
        Begin the process of finding the right Pokemon for you
      </Card.Text>
      <div>
        <Button variant="primary" size="lg" onClick={() => navigate(path)}>
          Play
        </Button>
      </div>
    </Card.Body>
  </Card>
</Container>
  );
        
        </>
    )
}