import React, { useState } from 'react';

// connect
import { connect } from 'react-redux';
// Action creators
import { sum, subtract } from '../store/Calculator/Calculator.actions';

// State
const [a, setA] = useState(0);
const [b, setB] = useState(0);

function Calculator({ props, sum, subtract }) {
    return (
        <>
            <input type="text" placeholder="a" onChange={(e) => setA(+e.target.value)} />
            <input type="text" placeholder="b" onChange={(e) => setB(+e.target.value)} />

            {/* <button onClick={() => sum(1, 4)}>somar</button>
            <button onClick={() => subtract(4, 2)}>Subtrair</button> */}

            <button onClick={() => sum(a, b)}>somar</button>
            <button onClick={() => subtract(a, b)}>Subtrair</button>

            <div>{props.result}</div>
        </>
    );
}

// Map state to props
function mapStateToProps(state) {
    return {
        // state from store
        result: state.calculator
    }
}

function mapDispatchToProps() {
    return {
        sum,
        subtract
    }
}

// using connect
export default connect(mapStateToProps, mapDispatchToProps)(Calculator);