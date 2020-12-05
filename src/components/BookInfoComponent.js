import React from 'react';
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderBook({book}) {
    return (
        <div className="col-md-5 m-1">
            <Card>
                <CardImg top src={book.image} alt={book.name} />
                <CardBody>
                    <CardText>{book.description}</CardText>
                </CardBody>
            </Card>
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
                                <Link to="/directory">Directory</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem active>
                                {props.book.name}
                            </BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.book.name}</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderBook book={props.book} />
                </div>
            </div>
        );
    }
    return (
        <div />
    );
}

export default BookInfo;