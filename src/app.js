import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import createStore from "./store/configureStore";
import { startSetExpenses } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "./firebase/firebase";

const store = createStore();

// store.dispatch(addExpense({description:'Water Bill', amount:4500}));
// store.dispatch(addExpense({description:'Gas Bill',createdAt:125}));
// store.dispatch(addExpense({description:'Rent',amount:125000}));
// store.dispatch(setTextFilter('water'));

// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'));
// },3000);

const state = store.getState();
const { expenses, filters } = state;
console.log(getVisibleExpenses(expenses, filters));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById("app"));

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById("app"));
});
