import React, { useState } from 'react';

// react-redux
import { useSelector, useDispatch } from 'react-redux';
// Action creators
import { sum, subtract } from '../store/Calculator/Calculator.actions';

// State
const [a, setA] = useState(0);
const [b, setB] = useState(0);

function Calculator() {
    const dispatch = useDispatch();

    // get state from store
    const result = useSelector((state) => state.calculator);

    return (
        <>
            <input type="text" placeholder="a" onChange={(e) => setA(+e.target.value)} />
            <input type="text" placeholder="b" onChange={(e) => setB(+e.target.value)} />

            {/* <button onClick={() => dispatch({type:'SUM', payload:[1,2]})}>somar</button> */}

            {/* Dispatch action creators on click */}
            {/* <button onClick={() => dispatch(sum(1, 4))}>somar</button>
            <button onClick={() => dispatch(subtract(4, 2))}>Subtrair</button> */}
            <button onClick={() => dispatch(sum(a, b))}>somar</button>
            <button onClick={() => dispatch(subtract(a, b))}>Subtrair</button>

            <div>{result}</div>
        </>
    );
}

// Map state to props
// function mapStateToProps(state) {
//     return {
//         state from store
//         result: state.calculator
//     }
// }

// using connect
export default Calculator;