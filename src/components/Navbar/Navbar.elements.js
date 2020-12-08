import styled from 'styled-components';
import { AiFillAmazonCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Container } from '../../globalStyles';
//!This is the styling for the nav component aka styled components
//!It can go inside the component but for readability I placed it in this component

export const Nav = styled.nav`
  background: green;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  ${Container}
`;

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

export const NavIcon = styled(AiFillAmazonCircle)`
  margin-right: 0.5rem;
`;

export const HamBurgerMenu = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
