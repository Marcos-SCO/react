// property propagation
const NameContext = React.createContext('name');

// chain of components
function MyComponent1(props) {
    const name = 'Marcos dos Santos Carvalho';
    return (
        <div className="component-1">
            <MyComponent2>
                <MyComponent3 clickInc={props.clickInc} />
            </MyComponent2>
        </div>
    )
}

function MyComponent2(props) {
    return (
        <div className="component-2">
            <div>
                <header>{props.children}</header>
                <footer></footer>
            </div>
        </div>
    )
}

function MyComponent3(props) {
    const [tel, setTel] = React.useState('1143825357');
    setTimeout(() => {
        setTel('944448798');
    }, 1550)
    return (
        <div className="component-3">
            <MyComponent4 tel={tel} clickInc={props.clickInc} />
        </div>
    )
}

function MyComponent4(props) {
    const [age, setAge] = React.useState(22);
    setTimeout(() => {
        setAge(23);
    }, 1000);

    return (
        <div className="component-4">
            <p>Age: {age}</p>
            <p>Tel - {props.tel}</p>
            <button type="button" onClick={props.clickInc}>Increment</button>
        </div>
    )
}

function MyComponent(props) {
    return (
        <div id="components">
            <MyComponent1 clickInc={props.clickInc} />
        </div>
    )
}

function MyBrotherComponent(props) {
    return (
        <div id="brother-component">
            <MyBrotherComponent2 count={props.count} />
        </div>
    )
}

function MyBrotherComponent2(props) {

    React.useEffect(function(){
        localStorage.setItem('count', props.count)
    });

    return (
        <h2>Counter: {props.count}</h2>
    )
}

function AppComponent() {
    const [count, incCount] = React.useState(parseInt(localStorage.getItem('count')) || 0);

    const clickInc = () => {
        incCount(count + 1)
    }

    return (
        <React.Fragment>
            <MyComponent clickInc={clickInc} />
            <MyBrotherComponent count={count} />
        </React.Fragment>
    );
}

// unchain components
ReactDOM.render(
    <AppComponent />,
    document.getElementById('app')
)