import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDirectoryItem({book}) {
    return (
        <Card>
            <Link to={`/directory/${book.id}`}>
                <CardImg width="100%" src={book.image} alt={book.name} />
                <CardImgOverlay>
                    <CardTitle>{book.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

function Reader(props) {
    const directory = props.books.map(book => {
        return (
            <div key={book.id} className="col-md-5 m-1">
                <RenderDirectoryItem book={book} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/home">Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            Readers
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Readers</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                {directory}
            </div>
        </div>
    );
}



export default Reader;