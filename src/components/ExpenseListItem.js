// Export a stateless functional component
// description, amount, createdAt
import React from "react";
import moment from "moment";
import { NavLink } from "react-router-dom";
import numeral from "numeral";

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div>
        <NavLink to={`/edit/${id}`} className={({ isActive }) => isActive ? 'is-active' : undefined} end>
            <h3>{description}</h3>
        </NavLink>
        <p>
            {numeral(amount / 100).format('$0,0.00')} - {moment(createdAt).format('MMMM Do, YYYY')}, {moment(createdAt).fromNow()}
        </p>
    </div>
);

export default ExpenseListItem;