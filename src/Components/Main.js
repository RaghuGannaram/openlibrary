import React from 'react';
import Data from "../response.json";

function Main() {
    const ISBN = Data["ISBN:9780980200447"];
    return (
        <div className="main">
            <div className="mainImage">
                <img src = {ISBN.cover.medium} alt = "Not Found"/>
            </div>
            <div className = "mainContent">
                <h1>{ISBN.title}</h1>
                <p>This edition was published in {ISBN.publish_date} by {ISBN.publishers[0].name} in {ISBN.publish_places[0].name}.</p>
                <h2>Table of Contents</h2>
                {
                    ISBN.table_of_contents.map(table=><p>{table.title}</p>)
                }
                <h2>Classifications</h2>
                <ul>
                    <li>Library of Congress &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  {ISBN.classifications.lc_classifications[0]}</li>
                    <li>Dewey Decimal Class  &nbsp;&nbsp; {ISBN.classifications.dewey_decimal_class[0]}</li>
                </ul>
                <h2>The Physical Object</h2>
                <dl>
                    <dt>Pagination</dt> <dt>{ISBN.pagination}</dt>
                    <dt>Number of pages</dt> <dt>{ISBN.number_of_pages}</dt>
                    <dt>Weight</dt> <dt>{ISBN.weight}</dt>
                </dl>
            </div>
        </div>
    )
}

export default Main
