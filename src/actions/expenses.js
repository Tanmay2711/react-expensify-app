import { v1 as uuidv1 } from "uuid";
import database from "./../firebase/firebase";

export const addExpense = (expense) => ({
  type: "ADD_EXPENSE",
  expense,
});

export const startAddExpense = (expense) => {
  return (dispatch) => {
    const { description, note, amount, createdAt } = expense;
    database
      .ref("expenses")
      .push(expense)
      .then((ref) => {
        dispatch(
          addExpense({
            id: ref.key,
            ...expense,
          })
        );
      });
  };
};

export const editExpense = (id = "", expenseToEdit = {}) => ({
  type: "EDIT_EXPENSE",
  id,
  expenseToEdit,
});

export const removeExpense = (id = "") => ({
  type: "REMOVE_EXPENSE",
  id,
});

export const setExpenses = (expenses) => ({
  type: "SET_EXPENSES",
  expenses,
});

export const startSetExpenses = () => {
  return (dispatch) => {
    return database
      .ref("expenses")
      .once("value")
      .then((snapshot) => {
        const expenses = [];
        snapshot.forEach((childSnapshot) => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });
        dispatch(setExpenses(expenses));
      });
  };
};
