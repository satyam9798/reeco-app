import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  background-color: #256c28;
  padding: 1rem 7rem;
  display: grid;
  grid-template-columns: 1fr 3fr 2fr 1fr 1fr;
  align-items: center;
  justify-content: space-around;
`;

const Logo = styled.div`
  color: white;
  font-size: 24px;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: space-around;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const BlankLink = styled.div`
  flex-grow: 1; 
`;

const ShoppingCartIcon = styled.div`
  font-size: 24px;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
`;

const UserDropdown = styled.div`
  position: relative;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
`;

const DropdownContent = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #4caf50;
  padding: 10px;
  display: none;
  z-index: 1;

  ${UserDropdown}:hover & {
    display: block;
  }
`;

const Navbar: React.FC = () => {
  return (
      <NavbarContainer>
        <Logo>REECO</Logo>
        <NavLinks>
            <NavLink href="/">Store</NavLink>
            <NavLink href="/orders">Orders</NavLink>
            <NavLink href="/analytics">Analytics</NavLink>
          </NavLinks>
          
        <BlankLink></BlankLink>
          
        <ShoppingCartIcon>🛒</ShoppingCartIcon>
        <UserDropdown>
          Hello, James
          <DropdownContent>
            
          </DropdownContent>
        </UserDropdown>
      
    </NavbarContainer>
  );
};

export default Navbar;