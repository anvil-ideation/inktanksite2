import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import { BOOKCATEGORIES } from '../shared/bookcategories';
import { BOOKS } from '../shared/books';
import { Link } from 'react-router-dom';

    function RenderDirectoryItem({book}) {
        return (
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="card mb-2">
                                <div class="cardHorizontal">
                                    <Link to={`/readers/${book.id}`}>
                                        <div class="img-square-wrapper card-img-left-crop-height clearfix d-none d-lg-block">
                                            <img class="card-img-left" src={book.image} alt={book.title} />
                                        </div>
                                    </Link>
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-12 col-md-8">
                                                <h3 class="card-title card-left-title">{book.title}<br /><small>by {book.author}</small></h3>
                                                <p class="card-text card-left-text my-0">{book.description}</p>
                                            </div>
                                            <div class="col-12 col-md-4">
                                                <Link to={`/readers/${book.id}`} class="btn btn-inktank-card-left text-white">Read</Link>
                                                <Link to={`/readers/${book.id}`} class="btn btn-inktank-card-left-sample text-white">Sample</Link>
                                            </div>
                                            <div class="col-12 col-md-8">
                                                <p>
                                                    <br />
                                                    <strong>Released:</strong> {book.release}<br />
                                                    <strong>Language:</strong> {book.language}<br />
                                                    <strong>Rating:</strong> {book.rating}/5 -- {book.ratingCount} ratings
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }

    function BookCategories({props}) {
        
        const categories = BOOKCATEGORIES.map(category => {
            return (
                <div key={category.id} className="col">
                    <RenderCategoryItem category={category}/>
                </div>
            );
        });

        return(
            <>
                <ListGroup defaultActiveKey="#link1">
                    {categories}
                </ListGroup>
            </>
        );
    };

    function RenderCategoryItem({category}) {

        let activeCategory = "Adventure";
        let activeBooks = BOOKS.filter(book => book.category === activeCategory);

        function setCategory() {
            let bookCategoryLabel = category.category;
            document.getElementById("bookCategory").textContent = `${bookCategoryLabel} book`;
            document.getElementById("bookCategory").setAttribute("name",category.category);
        }
        return (
            <div>
                <>
                <ListGroup.Item action onClick={setCategory}>
                {category.category}
                </ListGroup.Item>
                </>
            </div>
        );
    };

function BookAll({props}) {

    const directory = BOOKS.map(book => {
        return (
            <div key={book.id} className="col">
                <RenderDirectoryItem book={book} />
            </div>
        );
    });

    return(
        <>
            <div className="col-xs-6 col-md-3">
                <h3>Categories:</h3>
                <hr />
                <BookCategories />
            </div>
            <div className="col-xs-6 col-md-9">
                {directory}
            </div>
        </>
    );
};

export default BookAll;