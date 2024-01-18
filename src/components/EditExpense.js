import React from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses";

const EditExpense = (props) => {
    let { id } = useParams();
    const navigate = useNavigate();
    
    return (
    <div>
        <ExpenseForm 
            expense={props.expense}
            onSubmit={(expense) => {
                props.dispatch(editExpense(props.expense.id, expense));
                console.log('updated', expense)
                navigate('/');
            }}
        />
        <button 
            onClick={(e) => {
                props.dispatch(removeExpense({ id }))
                navigate('/');
        }}>Remove</button>
    </div>
)};

const mapStateToProps = (state) => {
    const params = {id: window.location.pathname.split("/")[2]}
    return {
        expense: state.expenses.find((expense) => expense.id === params.id)
    }
}

// const mapDispatchToProps = (dispatch) => ({ 
//     editExpense: (id, expense) => dispatch(editExpense(id, expense)), 
//     removeExpense: (data) => dispatch(removeExpense(data)) 
// });

export default connect(mapStateToProps/*, mapDispatchToProps*/)(EditExpense);

// import React from "react";
// import { connect } from "react-redux";
// import { useNavigate } from 'react-router-dom';
// import ExpenseForm from "./ExpenseForm";
// import { editExpense, removeExpense } from "../actions/expenses";

// // const withNavigate = Comp => props => <Comp {...props} navigate={useNavigate()} />;

// export class EditExpense extends React.Component {
//     onSubmit = (expense) => {
//         this.props.editExpense(this.props.expense.id, expense);
//         this.props.history.push('/');
//     };
//     onClick = () => {
//         this.props.removeExpense({ id: this.props.expense.id });
//         this.props.history.push('/');
//     };
//     render() {
//         return (
//         <div>
//             <ExpenseForm 
//                 expense={this.props.expense}
//                 onSubmit={this.onSubmit}
//             />
//             <button onClick={this.onClick}>Remove</button>
//         </div>
//     )
//     };
// }

// // const EditExpensePage = withNavigate(EditExpense);

// const mapStateToProps = (state, props) => {
//     const params = {id: window.location.pathname.split("/")[2]}
//     return {
//         expense: state.expenses.find(expense => expense.id === params.id)
//     }
// };

// const mapDispatchToProps = (dispatch) => ({ 
//     editExpense: (id, expense) => dispatch(editExpense(id, expense)), 
//     removeExpense: (data) => dispatch(removeExpense(data)) 
// });

// export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);