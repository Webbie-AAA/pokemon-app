import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'

export default function GeneralCard(){
    return(
        <>

   <Container fluid className="px-5 my-4">
  <Card className="w-100 shadow-sm start-game" style={{ minHeight: "calc(100vh - 56px - 4rem)" }}>
    <Card.Body className="p-4 d-flex flex-column justify-content-center align-items-center text-center">
      <Card.Title>Card Title</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <div>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </div>
    </Card.Body>
  </Card>
</Container>
  );
        
        </>
    )
}