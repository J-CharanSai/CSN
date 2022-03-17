import React, { Component } from "react";
import {
    Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Modal, ModalBody, Label, ModalHeader,
    Form, FormGroup, Input, Button
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false,
            isLoggedin: false,
            username: "",
            password: ""
        }
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleModal() {
        let temp = this.state.isModalOpen;
        this.setState({ isModalOpen: !temp });
    }
    toggleNav() {
        let temp = this.state.isNavOpen;
        this.setState({ isNavOpen: !temp });
    }
    handleLogin(event) {
        this.toggleModal();
        let temp = this.state.isLoggedin;
        this.setState({ username: this.username.value });
        this.setState({ password: this.password.value });
        //code to handle login
        alert("username: " + this.username.value + "password: " + this.password.value +
            "Remember Me: " + this.remember.checked);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <div >
                    {/* <div className="row-header"> */}
                    <img src="/assets/images/logo2.png" width="12%" height="12%"/>
                    {/* </div> */}
                </div>
                <div className="navbar-header">
                    <Navbar dark expand="md">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand style={{ display: 'flex' }} href="/"><img src='/assets/images/clapperboard.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>

                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="me-auto" navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/profile'><span className="fa fa-address-card fa-lg"></span> Profile</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/addmovie'><span className="fa fa-info fa-lg"></span> Add Movie</NavLink>
                                </NavItem>
                            </Nav>
                            {/* <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span>Login</Button>
                                </NavItem>
                            </Nav> */}
                        </Collapse>

                    </Navbar>
                </div>

                {/* <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                        innerRef={(input) => this.remember = input} />
                                    Remember me
                                </Label>

                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal> */}
            </div>
        );
    }
}


export default Header;