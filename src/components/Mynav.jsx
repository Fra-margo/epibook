import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#">EpiBooks</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#">Shop</Nav.Link>
                <Nav.Link href="#">About</Nav.Link>
                <Nav.Link href="#">Browse</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default Navigation