import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import './index.scss'
import Brand from '../../assets/brand/Trelau Logo.png'

const index = () => {
    return (
        <>
            <Navbar className='fixed-top static' expand={"lg"}>
                <Container fluid>
                    <Navbar.Brand href="#home">
                        <img src={Brand} alt="Company brand" width={"12%"} />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='me-auto'>
                            <Nav.Link className='me-3 active' href="#home">Home</Nav.Link>
                            <Nav.Link className='me-3' href="#link">About</Nav.Link>
                            <Nav.Link className='me-3' href="#link">Menu</Nav.Link>
                            <Nav.Link href="#link">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default index