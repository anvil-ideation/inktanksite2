import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { BOOKS } from '../shared/books';

class Main extends Component {
    constructor(props) {
    super(props);
    this.state = {
        books: BOOKS,
        };
    }

    render() {
        
        const HomePage = () => {
            return (
                <Home 
                    book={this.state.books.filter(book => book.featured)[0]}
                />
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />             
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;