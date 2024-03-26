import { Navbar, NavbarBrand, Nav, NavItem, } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/icons/logo.png';

const Header = () => {

    return (
        <Navbar
            className="my-2 header"
            dark
        >
            <NavbarBrand href="/">
                <img
                    alt="logo"
                    src={Logo}
                    style={{
                        height: 40,
                        width: 40,
                        marginRight: 10,
                    }}
                />
                tarotreader
            </NavbarBrand>
            <Nav horizontal='end'>
            <NavItem>
                <NavLink
                    active
                    className='nav-link'
                    to="/"
                >
                    Home
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink className='nav-link' to="/about">
                    About
                </NavLink>
            </NavItem>
            </Nav>
        </Navbar>
    );
};

export default Header;