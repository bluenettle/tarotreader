import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Logo from '../assets/icons/logo.png';

const Header = () => {

    return (
        <Navbar
            className="my-2"
            color="light"
            light
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
                    href="#"
                >
                    Home
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">
                    About
                </NavLink>
            </NavItem>
            </Nav>
        </Navbar>
    );
};

export default Header;