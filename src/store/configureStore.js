import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import expenseReducer from "./../reducers/expenses";
import filterReducer from "./../reducers/filters";
import thunk from "redux-thunk";

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

export default () => {
  const Store = createStore(
    combineReducers({
      expenses: expenseReducer,
      filters: filterReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return Store;
};
