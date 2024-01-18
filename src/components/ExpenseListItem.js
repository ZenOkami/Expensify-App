// Export a stateless functional component
// description, amount, createdAt
import React from "react";
import moment from "moment";
import { NavLink } from "react-router-dom";

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div>
        <NavLink to={`/edit/${id}`} className={({ isActive }) => isActive ? 'is-active' : undefined} end>
            <h3>{description}</h3>
        </NavLink>
        <p>{amount} - {moment(createdAt).fromNow()}</p>
    </div>
);

export default ExpenseListItem;