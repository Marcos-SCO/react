import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

import Link from 'next/link';

const linkStyle = {
    marginRight: 15
}

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">React</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/"><a style={linkStyle}>Home</a></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/sobre"><a style={linkStyle}>Sobre</a></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/contato"><a style={linkStyle}>Contato</a></NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </>
    );
}

export default Menu;