import React from 'react';
import RenderHomeTable from './AboutTableComponent';
import RenderHomeCollapse from './AboutFAQsComponent';

function RenderCard({book}) {
    return (
        <>
        <div />
        </>
    )
}

function RenderHomeGeneral(props) {
    return (
        <>
            <div className="container">
                <div className="row row-content">
                    <div className="offset-lg-2 col-lg-8 col-12">
                        <h1 classname="mb-4 text-center">What the heck is inkTank?</h1>
                        <p><strong>When we say that we are the ultimate means to connect aspiring authors and avid readers we mean it!</strong> inkTank is a unique platform that plays two different roles, one for authors and one for readers.</p>
                    </div>
                    <div className="col-6 offset-lg-2 col-lg-4">
                        <h3 className="text-center"><a href="readers.html">For Readers</a></h3>
                        <p>On the reader side of the platform, readers can subscribe to either inkTank Magazine, where they get a chapter a time of multiple books a month, giving a diverse and unique reading experience, or can subscribe to the reader portal and access great reads before they reach the shelves.</p>
                    </div>
                    <div className="col-6 col-lg-4">
                        <h3 className="text-center"><a href="authors.html">For Authors</a></h3>
                        <p>On the author side of the platform, authors can create and publish their own content online to subscribed readers who are looking for great reads before they hit the shelves. Authors can also apply for a serialized spot in inkTank Magazine to get paid to write a chapter at a time.</p>
                    </div>
                    <div className="offset-lg-2 col-lg-8 col-12">
                        <p classnNme="text-center"><strong>Whether you're a reader or an author, or both, inkTank is unlike anything you've ever experienced!</strong></p>
                        <h3 className="text-center mb-3">What else would you like to know?</h3>
                    </div>
                    <div className="offset-lg-2 col-lg-4">
                        <RenderHomeCollapse props={props}/>
                    </div>
                    <div className="col-lg-4">
                        <RenderHomeTable props={props}/>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row row-content">
                    <div className="offset-lg-1 col-12 col-lg-4">
                        <h3 className="mb-4 text-center"><a href="readers.html">inkTank for Readers</a></h3>
                        <p className="d-none d-sm-block">Imagine discovering new books and authors before they hit the shelves! That is the power of <strong>inkTank for Readers</strong>.</p>
                        <p>Readers can discover great reads 2 different ways (pick one or both great options!):</p>
                        <ol>
                            <li>Subscribe to inkTank Magazine, which features serialized authors who publish a chapter at a time!</li>
                            <li>Subscribe to inkTank Portal, where you can discover books from established and aspiring before they hit the shelves!</li>
                        </ol>
                        <div className="text-center">
                            <a href="readers.html" role="button" type="submit" class="btn btn-inktank-reader btn-lg text-nowrap">Learn more about Readers</a>
                        </div>
                    </div>
                    <div className="col-12 col-8 col-lg-6">
                        <h3 className="small text-center my-3">Take a sneak peak at the most popular books on inkTank this month:</h3>
                        <RenderCard book={props.books} />
                    </div>
                </div>
            </div>
        </>
    );
}

function Home(props) {
    return (
        <>
            <RenderHomeGeneral />
        </>
    )
}

export default Home;