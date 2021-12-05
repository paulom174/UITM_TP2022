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

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLogo to="/">
                    Logo
            </NavLogo>
                <Bars />
                <SearchBar> </SearchBar>
                <NavMenu>
                    <NavLink to="/" activestyle>
                        Home
                    </NavLink>
                    <NavLink to="/about" activestyle>
                        About
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
export default Navbar;