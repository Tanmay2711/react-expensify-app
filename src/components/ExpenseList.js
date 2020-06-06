import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from './../selectors/expenses';

const ExpenseList = (props) => {

    return (
        <div>
            <h1>This is Expense List.</h1>
            {
                props.expenses.map((expense,index) => {
                    return <ExpenseListItem key={index} expense={expense}/>
                })
            }
        </div>
    );
}

const mapStoreToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses,state.filters)
    }
};

export default connect(mapStoreToProps)(ExpenseList);