import { Container, Navbar } from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar variant="dark" bg="primary">
      <Container>
        <Navbar.Brand className="fw-bold" onClick={() => window.location.href = '/'} style={{cursor: "pointer"}}>Next News</Navbar.Brand>
      </Container>
    </Navbar>
  );
}
