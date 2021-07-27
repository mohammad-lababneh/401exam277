import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Container } from 'react-bootstrap';
export class Header extends Component {
    render() {
        return (
            <div>

                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#/">coffee hose</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#favorite">my Favoret</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>


            </div>
        )
    }
}

export default Header
