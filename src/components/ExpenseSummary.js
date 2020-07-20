import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import selectExpenses from "./../selectors/expenses";
import selectTotalExpenses from "./../selectors/expenses-total";

const ExpenseSummary = ({ expenseCount, expenseTotal }) => {
  const expenseWord = expenseCount > 1 ? "expenses" : "expense";
  const formattedTotal = numeral(expenseTotal / 100).format("$0,0.00");
  return (
    <div>
      <h1>
        Viewing {expenseCount} {expenseWord} totalling {formattedTotal}.
      </h1>
    </div>
  );
};

ExpenseSummary.propTypes = {
  expenseCount: PropTypes.number,
  expenseTotal: PropTypes.number,
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    expenseTotal: selectTotalExpenses(visibleExpenses),
  };
};

export default connect(mapStateToProps)(ExpenseSummary);
