import React, { useState } from 'react';
import { Card, CardBody, Collapse, CardHeader, } from 'reactstrap';

function RenderHomeCollapse({props}) {
    const [toggleQuestion, setToggequestion] = useState(0);
    return (
        <>
            <Card>
                <CardHeader onClick={() => setToggequestion(1)}>
                    <span className="font-weight-bold">How many books is a reader allowed to read a month?</span>
                </CardHeader>
                <Collapse  isOpen={toggleQuestion === 1 ? true : false}>
                    <CardBody>
                        <p>Readers with Portal access can read as many books through inkTank as they would like. There is no limit! That said, you can only download books up to 5 books for reading offline or outside inkTank every 30 days.</p>
                    </CardBody>
                </Collapse>
            </Card>

            <Card>
                <CardHeader onClick={() => setToggequestion(2)}>
                    <span className="font-weight-bold">Can authors publish other places as well?</span>
                </CardHeader>
                <Collapse  isOpen={toggleQuestion === 2 ? true : false}>
                    <CardBody>
                        <p>inkTank is a service that helps readers and authors, and in no way limits an author. Authors have the right to add and remove content as they desire from the Portal, and are welcome to publish their content with us at the same time they they are publishing it in other places and with other publishers.</p>
                    </CardBody>
                </Collapse>
            </Card>

            <Card>
                <CardHeader onClick={() => setToggequestion(3)}>
                    <span className="font-weight-bold">Is it the same authors every month in the Magazine?</span>
                </CardHeader>
                <Collapse  isOpen={toggleQuestion === 3 ? true : false}>
                    <CardBody>
                        <p>No, the authors in inkTank Magazine change over time, depending on who inkTank chooses to "serialize." inkTank serializes 12 monthly authors and 4 quarterly authors at a time, meaning inkTank selects authors they feel will create content the subscribers will like, and pays them to produce content a chapter at a time.</p>
                        <p>The more subscribers like an author's work, the longer inkTank serializes them. If subscribers don't like the author's work, serialization may stop before the book is completed (like a TV show being canelled) and the remainder of the book would be made available in the portal once the author finishes it.</p>
                        <p>Whenever a serialized author finishes a book, or a serialized author loses their serialization, inkTank chooses a new author to serialize.</p>
                    </CardBody>
                </Collapse>
            </Card>

            <Card>
                <CardHeader onClick={() => setToggequestion(4)}>
                    <span className="font-weight-bold">How much does it cost to subscribe to inkTank?</span>
                </CardHeader>
                <Collapse  isOpen={toggleQuestion === 4 ? true : false}>
                    <CardBody>
                        <p className="d-none d-sm-block">The cost depends on whether you are a Reader or Author, as well as which subscription for each you have.</p>
                        <p>Reader Plans:</p>
                            <ul>
                                <li>Portal: $5/month</li>
                                <li>Magazine: $10/month</li>
                                <li>Dual: $13/month</li>
                            </ul>
                        <p>Author Plans:</p>
                            <ul>
                                <li>Book: $25/month</li>
                                <li>Book X: $50/month</li>
                            </ul>
                        <p>Combo Plans:</p>
                            <ul>
                                <li>Portal + Book: $28/month</li>
                                <li>Portal + Book X.: $53/month</li>
                                <li>Magazine + Book: $33/month</li>
                                <li>Magazine + Book X: $55/month</li>
                                <li>Portal + Magazine + Book: $35/month</li>
                                <li>Portal + Magazine + Book X: $60/month</li>
                            </ul>
                        <p><small>Annual prices are x10 monthly, and are a one-time payment made upfront.</small></p>
                    </CardBody>
                </Collapse>
            </Card>
        </>
    )
}

export default RenderHomeCollapse;