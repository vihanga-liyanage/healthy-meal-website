import React from 'react';
import { Bars, Nav, NavIcon, NavLink } from './NavbarElements';

const Navbar = ({toggle}) => {
    return (
        <div>
            <Nav>
                <NavLink to='/'>Healthy Meals</NavLink>
                <NavIcon onClick={toggle}>
                    <p>Menu</p>
                    <Bars />
                </NavIcon>
            </Nav>
        </div>
    )
}

export default Navbar;
