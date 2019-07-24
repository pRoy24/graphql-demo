import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class TopNav extends Component {
    render() {
        return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">GraphQL Demo Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <NavItem className="top-nav-link">
                    <Link to="/">
                        Storefront
                    </Link>
                </NavItem>
                <NavItem className="top-nav-link">
                    <Link to="/admin">
                        Admin
                    </Link>
                </NavItem>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        )
    }
}