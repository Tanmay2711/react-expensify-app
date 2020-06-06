import React from 'react';
import { connect } from 'react-redux';
import 'react-dates/initialize';
import {DateRangePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { setTextFilter, sortByDate, sortByAmount, setStartDate,setEndDate } from '../actions/filters';

class ExpenseListFilter extends React.Component {
    state = {
        calenderFocused:null
    }
    onFilterTextChange = (e) => {
        this.props.dispatch(setTextFilter(e.target.value));
    }

    onSelectOptionChange = (e) => {
        if(e.target.value === 'date') {
            this.props.dispatch(sortByDate());
        } else if (e.target.value === 'amount'){
            this.props.dispatch(sortByAmount());
        }
    }
    onDateChange = ({ startDate,endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }
    onFocusChange = (calenderFocused) => {
        this.setState(() => ({calenderFocused}));
    }
    render(){
        return(
            <div>
            <input type="text" value = {this.props.filters.text} onChange={this.onFilterTextChange}></input>
            <select value={this.props.filters.sortBy} onChange={this.onSelectOptionChange}>
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>
            <DateRangePicker 
                startDate={this.props.filters.startDate}
                endDate={this.props.filters.endDate}
                onDatesChange={this.onDateChange}
                focusedInput={this.state.calenderFocused}
                onFocusChange={this.onFocusChange}
                numberOfMonths={1}
                isOutsideRange={() => false}
                showClearDates={true}
                startDateId="start_date_input"
                endDateId="end_date_input"
            >
            </DateRangePicker>
        </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        filters:state.filters
    }
};

export default connect(mapStateToProps)(ExpenseListFilter);