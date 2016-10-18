import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, MenuItem  } from 'react-bootstrap';

class NavbarContainer extends Component {
    render() {
        return (
            <Navbar fluid>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Desktop</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavDropdown eventKey={1} title='User Name' id="account-nav-dropdown">
                            <MenuItem eventKey={1.1}>Change password</MenuItem>
                            <MenuItem eventKey={1.2}>Me settings</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={1.3}>Logout</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavbarContainer;