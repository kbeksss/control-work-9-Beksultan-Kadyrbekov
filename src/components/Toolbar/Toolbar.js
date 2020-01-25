import React from 'react';
import {Navbar, NavbarBrand, Nav, NavItem, NavLink,} from 'reactstrap';
import {NavLink as Link} from "react-router-dom";
const Toolbar = () => {
    return (
        <header className='Main-toolbar'>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand tag={Link} to='/' exact>
                    My Contacts
                </NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink tag={Link} to='/new' exact >Add New Contact</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </header>
    );
};

export default Toolbar;
