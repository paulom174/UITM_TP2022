import React from "react";
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    // NavBtn,
    // NavBtnLink,
} from "./NavbarElements";
import SearchBar from "../SearchBar/index";
import logo from '../../assets/images/logo.png';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLogo to="/">
                    <img src={logo} alt="Girl in a jacket" />
                    <h2>Weasy</h2>
                </NavLogo>
                <Bars />
                <SearchBar> </SearchBar>
                <NavMenu>
                    <NavLink to="/" activestyle>
                        Home
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
export default Navbar;