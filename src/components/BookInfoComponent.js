import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderBook({book}) {
    
    return (
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="card mb-2">
                        <div class="cardHorizontal">
                            <div class="img-square-wrapper card-img-left-crop-height clearfix d-none d-lg-block">
                                <img class="card-img-left" src={book.image} alt={book.title} />
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-12 col-md-8">
                                        <h3 class="card-title card-left-title">{book.title}<br /><small>by {book.author}</small></h3>
                                        <p class="card-text card-left-text my-0">{book.description}<br />
                                                <br />
                                                <strong>Released:</strong> {book.release}<br />
                                                <br />
                                                <strong>Language:</strong> {book.language}<br />
                                                <br />
                                                <strong>Rating:</strong> {book.rating}/5 -- {book.ratingCount} ratings
                                            </p>
                                    </div>
                                    <div class="col-12 col-md-4">
                                        <a href="#" class="btn btn-inktank-card-left text-white">Read</a>
                                        <a href="#" class="btn btn-inktank-card-left-sample text-white">Sample</a>
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

function BookInfo(props) {
    
    if (props.book) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <Link to="/readers">Books List</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem active>
                                {props.book.title}
                            </BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.book.title} <small>by {props.book.author}</small></h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-7 m-1">
                        <RenderBook book={props.book} />
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div />
    );
}

export default BookInfo;