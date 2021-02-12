import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import BookAll from './BookCategoriesComponent';

/*function RenderDirectoryItem({book}) {
    return (
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="card mb-2">
                            <div class="cardHorizontal">
                                <Link to={`/reader/${book.id}`}>
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
*/
function Directory(props) {

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/home">Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            Books List
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <h2 align="center">What <span id="bookCategory" tag="bookCategory" name="Adventure">book</span> would you like to read?</h2>
                    <br />
                </div>
            </div>
            <div className="row">
                <BookAll></BookAll>
            </div>
        </div>
    );

}

export default Directory;