import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { dispatch, budget, expenses, currency } = useContext(AppContext);
  
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const setBudget = (newBudget) => {
        dispatch({type: 'SET_BUDGET', payload: newBudget});
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}<input
                        required='required'
                        type='number'
                        id='cost'
                        step={10}
                        value={budget}
                        max={20000}
                        min={totalExpenses}
                        style={{ marginLeft: '0rem' , size: 10}}
                        onChange={(event) => {
                            if(event.target.value > 20000) alert("Value cannot exceed 20000");
                            else if(event.target.value < totalExpenses) alert("Value cannot be lower than expenses");
                            else setBudget(event.target.value);
                            
                        }}>
                        </input></span>
        </div>
    );
};
export default Budget;
