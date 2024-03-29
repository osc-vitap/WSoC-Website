import styled from 'styled-components';
import{ Link as LinkS }from 'react-scroll'

export const Nav = styled.nav`
    background: #160041;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;

    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 60px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1400px;
`;

export const NavLogo = styled(LinkS)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    /* margin-left: 24px; */
    text-decoration: none;
    width: 119px;


`;

export const HamburgerIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%,60%);
        color: #fff;
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 60px;
`

export const NavLink = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-weight: 500;
    letter-spacing: 0.5px;

    &.active{
        color: #41E5FF;
        border-bottom: 3px solid #41E5FF;
    }
    &:hover {
        color: #41E5FF;
        transition: 0.2s ease-in-out;
    }
    
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled(LinkS)`
    border-radius: 5px;
    background: #41E5FF;
    white-space: nowrap;
    padding: 10px 22px;
    color: #160041;
    font-size: 16px;
    outline: none;
    border:none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    font-weight: 500;
    letter-spacing: 0.5px;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
    }
`