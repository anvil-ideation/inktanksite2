import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { Link } from 'react-router-dom';

class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);

    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event) {
        alert(`Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`);
        this.toggleModal();
        event.preventDefault();
    }

    render() {
        return (
            <>
                <footer className="site-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-4 offset-2 my-4">
                                <h1>Useful Links</h1>
                                <hr />
                                <div className="d-flex flex-row">
                                    <div className="flex-fill">
                                        <ul className="list-unstyled">
                                            <li className="mb-3"><Link className="active" to="/home">Home</Link></li>
                                            <li className="mb-3"><Link to="/readers">For Readers</Link></li>
                                            <li className="mb-3"><Link to="/authors">For Authors</Link></li>
                                            <li className="mb-3">
                                                <span class="ml-auto">
                                                    <a role="button" id="footerLoginButton" className="text-white" onClick={this.toggleModal}>
                                                        <p><strong>Login</strong></p>
                                                    </a>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="flex-fill">
                                        <ul className="list-unstyled">
                                            <li className="mb-3"><Link to="/home">inkTank Mag</Link></li>
                                            <li className="mb-3"><Link to="/readers">Browse Books</Link></li>
                                            <li className="mb-3"><Link to="/readers">Browse Authors</Link></li>
                                            <li className="mb-3"><Link to="/authors">Become an Author</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 col-md-3 offset-2 offset-md-0 my-4">
                                <h1>Company</h1>
                                <hr />
                                <ul className="list-unstyled">
                                    <li className="mb-3"><Link to="/about"><i className="fa fa-info mr-3"></i>About inkTank</Link></li>
                                    <li className="mb-3"><Link to="/about"><i className="fa fa-building mr-1"></i> Company Data</Link></li>
                                    <li className="mb-3"><a href="tel:+12065551234"><i className="fa fa-phone mr-2"></i>1 (925)-012-3456</a><br /></li>
                                    <li className="mb-3"><a href="mailto:help@inktank.co"><i className="fa fa-envelope-o mr-1"></i> Contact Us</a></li>
                                </ul>
                            </div>
                            <div className="col-4 col-md-3 offset-1 offset-md-0 my-4">
                                <h1>Social</h1>
                                <hr />
                                <ul className="list-unstyled">
                                    <li className="mb-3"><a target="_blank" href="http://instagram.com/"><i className="fa fa-instagram mr-2"></i> Instagram</a></li>
                                    <li className="mb-3"><a target="_blank" href="http://facebook.com/"><i className="fa fa-facebook mr-3"></i>Facebook</a></li>
                                    <li className="mb-3"><a target="_blank" href="http://twitter.com/"><i className="fa fa-twitter mr-2"></i> Twitter</a></li>
                                    <li className="mb-3"><a target="_blank" href="http://youtube.com/"><i className="fa fa-youtube mr-2"></i> YouTube</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row footer-copyright text-center">
                            <div className="col">© 2020 Copyright:
                                <Link to="#"><strong>inkTank.com</strong></Link>
                            </div>
                        </div>
                    </div>
                </footer>
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
            </>
        );
    };
}   

export default Footer;

/*
<li><Link to="/home">Home</Link></li>
<li><Link to="/directory">Directory</Link></li>
<li><Link to="/aboutus">About</Link></li>
<li><Link to="/contactus">Contact</Link></li>
*/