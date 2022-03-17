import React, { Component, useContext } from "react";
import {
    Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Modal, ModalBody, Label, ModalHeader,
    Form, FormGroup, Input, Button
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import {UserContext} from './UserContext';

class Header extends Component {
    // let {User,setUser} = useContext(UserContext);

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
    }

    toggleModal() {
         this.props.handleUser(null);

    }
    toggleNav() {
        let temp = this.state.isNavOpen;
        this.setState({ isNavOpen: !temp });
    }

    render() {
        console.log("header",this.props.user);
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
                            {(this.props.user===null) ? (<></>) :(<Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span>Logout</Button>
                                </NavItem>
                            </Nav>) }
                        </Collapse>

                    </Navbar>
                </div>
            </div>
        );
    }
}


export default Header;