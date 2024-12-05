import styled, { css } from 'styled-components';
import { LogOut } from '@styled-icons/boxicons-regular/LogOut';
import { Navbar } from 'react-bootstrap';


export const Avatar = styled.div`
  ${({ theme }) => css`
    background: ${ theme.colors.white };
    border-radius: 75px;
    width: 28px;
    height: 28px;
    margin-right: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: ${ theme.colors.primaryColor }
  `}  
`;

export const LogOutIcone = styled(LogOut)`
  width: 24px;
  object-fit: contain;      
  margin-right: 15px;
  cursor: pointer;
  ${({ theme }) => css`
    color: ${ theme.colors.white };
  `}  
`;

export const NavbarStyled = styled(Navbar)`
  ${({ theme }) => css`
    background-color: ${ theme.colors.primaryColor };
  `}  
`;

export const NavbarBrand = styled(Navbar.Brand)`
  ${({ theme }) => css`
    color: ${ theme.colors.white };
  `}  
`;