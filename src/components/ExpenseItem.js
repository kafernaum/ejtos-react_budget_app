import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { currency, dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><button style={{all: "unset", background: "green", color: "white", borderRadius:"10rem", width:"2.2rem", height:"2.2rem", fontWeight:"700", cursor:"pointer", fontSize:"1.6rem", display:"flex", alignItems:"center", justifyContent: "center"}} onClick={event=> increaseAllocation(props.name)}><span style={{marginTop: "-0.5rem"}}>+</span></button></td>
        <td><button style={{all: "unset", background: "darkRed", color: "white", borderRadius:"10rem", width:"2.2rem", height:"2.2rem", fontWeight:"700", cursor:"pointer", fontSize:"2rem", display:"flex", alignItems:"center", justifyContent: "center"}} onClick={event=> decreaseAllocation(props.name)}><span style={{marginTop: "-0.5rem"}}>-</span></button></td>

        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
