import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { BOOKS } from '../shared/books';
import { FEATUREDBOOKS } from '../shared/featuredbooks';
import Directory from './DirectoryComponent';
import BookInfo from './BookInfoComponent';

class Main extends Component {
    constructor(props) {
    super(props);
    this.state = {
        books: BOOKS,
        featuredBooks: FEATUREDBOOKS,
        };
    }

    render() {
        
        const HomePage = () => {
            return (
                <Home 
                    book={this.state.books.filter(book => book.featured)}
                />
            );
        }

        const BookWithId = ({match}) => {
            return (
                <BookInfo 
                    book={this.state.books.filter(books => books.id === +match.params.bookId)[0]}
                />
            );
        };

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/readers' render={() => <Directory books={this.state.books} />} />
                    <Route path='/readers/:bookId' component={BookWithId} />             
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;