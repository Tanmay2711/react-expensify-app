

Store.subscribe(() => {
    const state = Store.getState();
    const filteredExpenses = visibleExpenses(state.expenses,state.filters);
    console.log(filteredExpenses);
    //console.log(state);
});

const expenseOne = Store.dispatch(addExpense({
    description:'My Test Expense',
    note:'My Test Note',
    amount:1200,
    createdAt:10
}));

const expenseTwo = Store.dispatch(addExpense({
    description:'Coffee drinking',
    amount:1300,
    createdAt:100
}));

// Store.dispatch(removeExpense(expenseOne.expense.id));
// Store.dispatch(editExpense(expenseTwo.expense.id,{description:'Coffee drinking Updated',amount:400}));
// Store.dispatch(setTextFilter('rent May'));
// Store.dispatch(setTextFilter(''));

// Store.dispatch(sortByAmount());
// Store.dispatch(sortByDate());

// Store.dispatch(setStartDate(125));
// //Store.dispatch(setStartDate());
// Store.dispatch(setEndDate(521));
// Store.dispatch(setEndDate());

// Store.dispatch(setStartDate(99));
// Store.dispatch(setEndDate(101));
// Store.dispatch(setTextFilter('test'));

Store.dispatch(sortByAmount());


const demoState = {
    expenses:[{
        id:'dasasas',
        description:'rent',
        note:'test note',
        amount:0,
        createdAt:0
    }],
    filters:{
        text:'rent',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
}