import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

import AvatarUsuario from './avatarUsuario';
import Logout from './logout';
import { NavbarStyled, NavbarBrand } from './stylesNavBar';

const NavBar = () => {
    
    return (
        <NavbarStyled className="border-bottom pt-2 pb-2" collapseOnSelect expand="lg">
            <Container>
                <NavbarBrand href="/ponto">
                    Gestão de Ponto
                </NavbarBrand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto"></Nav>
                    <Nav className="nav nav-pills">
                        <div className="d-flex align-items-center"> <AvatarUsuario/> <Logout/></div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </NavbarStyled>
    );
}

export default NavBar;