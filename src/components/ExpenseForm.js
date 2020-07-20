import React from "react";
import moment from "moment";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    if (props.expense) {
      this.state = {
        description: props.expense.description,
        note: props.expense.note,
        amount: (props.expense.amount / 100).toString(),
        createdAt: moment(props.expense.createdAt),
        calenderFocused: false,
        error: "",
        isEdit: true,
      };
    } else {
      this.state = {
        description: "",
        note: "",
        amount: "",
        createdAt: moment(),
        calenderFocused: false,
        error: "",
        isEdit: false,
      };
    }
  }
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  onAmountChange = (e) => {
    const amount = e.target.value;

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calenderFocused: focused }));
  };
  onFormSubmit = (e) => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: "Invalid description or amount" }));
    } else {
      this.setState(() => ({ error: "" }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note,
      });
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          ></input>

          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          ></input>

          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calenderFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          ></SingleDatePicker>

          <textarea
            placeholder="Note"
            value={this.state.note}
            onChange={this.onNoteChange}
          ></textarea>

          <button>{this.state.isEdit ? "Edit Expense" : "Add Expense"}</button>
        </form>
        <br />
        {this.state.error && <p>{this.state.error}</p>}
      </div>
    );
  }
}

// ExpenseForm.propTypes = {
//   expense: PropTypes.shape({
//     amount: PropTypes.number,
//     createdAt: PropTypes.any,
//     description: PropTypes.any,
//     note: PropTypes.any,
//   }),
//   onSubmit: PropTypes.func,
// };
