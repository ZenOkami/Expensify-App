import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { addExpense } from "../actions/expenses";
import { useNavigate } from "react-router";

const AddExpense = (props) => {
    const navigate = useNavigate();
    return ( 
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm 
            onSubmit={(expense) => {
                props.dispatch(addExpense(expense));
                navigate('/')
            }}
        />
    </div>
)};

export default connect()(AddExpense);