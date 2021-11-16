import { Container } from "react-bootstrap";

export default function Footer() {
    return (
        <footer className="text-center bg-dark text-white">
            <Container className="p-4">
                <b>Next News</b> by <span style={{cursor:"pointer"}} onClick={() => window.location.href='https://github.com/elmojohnson'}>John Elmo Johnson</span>
            </Container>
        </footer>
    )
};
