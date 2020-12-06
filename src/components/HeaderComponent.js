import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false,
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);

    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    handleLogin(event) {
        alert(`Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`);
        this.toggleModal();
        event.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <header>
                        <div className="container jumbotron">
                            <div className="row">
                                <div className="col-12 text-center">
                                    <a href="/">Take a sneak peak at inkTank magazine</a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3 col-md-2 align-self-center">
                                    <img src="../assets/images/inktank_logo.png" className="img-fluid" alt="inkTank Logo" />
                                </div>
                                <div className="col-7 col-md-5 offset-2 offset-md-5 text-right">
                                <span>
                                    <Button outline color="info" onClick={this.toggleModal}>
                                        <i className="fa fa-sign-in fa-lg" /> Login
                                    </Button>
                                </span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-8 col-xs-6 offset-md-2 offset-xs-3 text-center">
                                    <h1>inkTank</h1>
                                    <h2 className="headerH2"><strong>Meet the ultimate means of connecting aspiring authors and avid readers!</strong></h2>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-6 col-md-3 offset-md-3 text-center">
                                    <a href="readers.html" role="button" type="submit" className="btn btn-inktank-reader btn-lg text-nowrap">For Readers</a>
                                </div>
                                <div className="col-6 col-md-3 text-center">
                                    <a href="authors.html" role="button" type="submit" className="btn btn-inktank-author btn-lg text-nowrap">For Authors</a>
                                </div>
                            </div>
                        </div>
                    </header>
                </Jumbotron>
                <Navbar dark sticky="top" expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/"><img src="../assets/images/inktank_logo.png" height="30" width="30" alt="inkTank Logo" /></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">  
                                        |
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <i className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/readers">
                                        <i className="fa fa-bookmark fa-lg" /> For Readers
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/authors">
                                        <i className="fa fa-pencil fa-lg" /> For Authors
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <span className="navbar-text ml-auto">
                                <a href="readers.html" role="button" type="submit" className="btn btn-inktank-reader btn-sm text-nowrap extraPad"><i className="fa fa-envelope fa-lg" /> Contact Us</a>
                            </span>
                        </Collapse>
                    </div>
                </Navbar>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username" innerRef={input => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password" innerRef={input => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember" innerRef={input => this.remember = input} />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary" className="mt-3">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Header;