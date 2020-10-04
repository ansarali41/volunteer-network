import React, { useContext } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import { logOutHandler} from '../Login/LoginManager';
import './Header.css'

const Header = () => {
    const [user, setUser] = useContext(UserContext);
    const { displayName, isLoggedIn } = user;
    const userLogOut=() => {
        logOutHandler()
            .then(res => {
                setUser(res)
            })
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light">
            <Link to="/home">
                <Navbar.Brand>
                    <img className="w-25" src="https://i.ibb.co/0DwF3w5/main-logo.png" alt="" />
                </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="nav-links">
                    <Link className="single-nav-link" to="/home">Home</Link>
                    <Link className="single-nav-link" to="/comingSoon">Donation</Link>
                    <Link className="single-nav-link" to="/comingSoon">Events</Link>
                    {isLoggedIn ? <Link to="/"> <Button className="mr-3" variant="success" onClick={userLogOut}>Logout</Button></Link>
                        : <Link to="/login"><Button className="mr-3" variant="success">Login</Button></Link>}
                    <Link to="/registrationList"><Button className="mr-3" variant="primary">Register</Button></Link>
                    <Link to="/admin"><Button className="mr-3" variant="dark">Admin</Button></Link>
                    {isLoggedIn && <h6 className="user-name-size">{displayName}</h6>}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;