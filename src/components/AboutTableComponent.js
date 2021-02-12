import React from 'react';

function RenderHomeTable ({props}) {
    return (
        <div className="table-responsive">
            <table className="table table-striped">
                <thead>
                    <tr className="bg-secondary text-light">
                        <th className="text-center" colspan="2">About inkTank</th>
                    </tr>
                </thead> 
                <tbody className="table-secondary">
                    <tr>
                        <th>Portal Subscribers</th>
                        <td>52,152</td>
                    </tr>
                    <tr>
                        <th>Magazine Subscribers</th>
                        <td>22,142</td>
                    </tr>
                    <tr>
                        <th>Authors Subscribed</th>
                        <td>256</td>
                    </tr>
                    <tr>
                        <th># of Books in Portal</th>
                        <td>2,793</td>
                    </tr>
                    <tr>
                        <th># Pages Read</th>
                        <td>101,325,542</td>
                    </tr>
                </tbody>   
            </table>
        </div>
    )
}

export default RenderHomeTable;