import React, { useState, useEffect } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import './index.scss'
import Brand from '../../assets/brand/Trelau Logo.png'

const NavbarFn = () => {
    const [navbarActive, setNavbarActive] = useState(false)

    const changeNavbarBg  = () => {
        if(window.scrollY >= 60) {
            setNavbarActive(true)
        } else {
            setNavbarActive(false)
        }
    }

    useEffect(() => {
        changeNavbarBg()
        window.addEventListener("scroll", changeNavbarBg)
    }, [])

    return (
        <>
            <Navbar className={navbarActive? 'fixed-top bg-white shadow' : 'fixed-top static'} expand={"lg"}>
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

export default NavbarFn