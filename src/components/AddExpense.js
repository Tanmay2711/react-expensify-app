import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { startAddExpense } from "./../actions/expenses";

const AddExpense = (props) => (
  <div>
    <h1>This is from add expense page.</h1>
    <ExpenseForm
      onSubmit={(expense) => {
        props.dispatch(startAddExpense(expense));
        props.history.push("/");
      }}
    />
  </div>
);

export default connect()(AddExpense);
