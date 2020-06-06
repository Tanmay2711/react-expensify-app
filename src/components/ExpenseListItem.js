import React from 'react';
import {Link} from 'react-router-dom';

const ExpenseListItem = (props) => {

    return(
        <div>
            <Link to={`#`} onClick={(param) => {console.log('Tanmay V',param); window.location.href="http://www.google.com"}}>Test</Link>
            <Link to={`/edit/${props.expense.id}`}>
                <h3>{props.expense.description}</h3>
            </Link>
            <p>{props.expense.createdAt} - {props.expense.amount}</p>
        </div>
    );
};

export default ExpenseListItem;