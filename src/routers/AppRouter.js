import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './../components/Header';
import AddExpense from './../components/AddExpense';
import EditExpense from './../components/EditExpense';
import ExpenseDashboard from './../components/ExpenseDashboard';
import Help from './../components/Help';
import NotFound from './../components/NotFound';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboard} exact={true}></Route>
                <Route path="/create" component={AddExpense}></Route>
                <Route path="/edit/:id" component={EditExpense}></Route>
                <Route path="/help" component={Help}></Route>
                <Route component={NotFound}></Route>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;