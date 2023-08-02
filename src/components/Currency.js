import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const {currency, dispatch} = useContext(AppContext);
    const availableCurrencies = {
        "$":"Dollar",
        "£":"Pound",
        "€":"Euro",
        "₹":"Ruppee"
    }
    return (
        <div class=" alert alert-secondary">
        <select style={{background:"#61dafb", color:"white", borderRadius:'0.2rem', paddingTop:"0.15rem", paddingBottom:"0.15rem", paddingLeft:"0.6rem", paddingRight:"0.6rem"}} id="currencySelect"  name="currency" onChange={(event) =>  dispatch({  type: 'CHG_CURRENCY', payload: event.target.value})}>
        <option value="" selected disabled>{`Currency (${currency} ${availableCurrencies[currency]})`}</option>

        <option value="$">$ Dollar</option>
        <option value="£">£ Pound</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Ruppee</option>
        </select>

        </div>


    );
};
export default Currency;
