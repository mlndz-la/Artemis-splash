import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { NavLink } from 'react-router-dom';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  HamBurgerMenu,
} from './Navbar.elements';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/'>
              <NavIcon />
              Amazon
            </NavLogo>
            <HamBurgerMenu onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </HamBurgerMenu>
            {/* <NavMenu onClick={handleClick}>
              <NavItem></NavItem>
              <NavLink to='/'>Home</NavLink>
            </NavMenu> */}
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
//!Fix hamburger bug not displaying
