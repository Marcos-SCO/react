// property propagation
const NameContext = React.createContext('name');

// chain of components
function MyComponent1() {
    const name = 'Marcos dos Santos Carvalho';
    return (
        <div className="component-1">
            <MyComponent2>
                <MyComponent3 />
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

function MyComponent3() {
    const [tel, setTel] = React.useState('1143825357');
    setTimeout(() => {
        setTel('944448798');
    }, 1550)
    return (
        <div className="component-3">
            <MyComponent4 tel={tel} />
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
        </div>
    )
}

function MyComponent() {
    return (
        <div id="components">
            <MyComponent1 />
        </div>
    )
}
// unchain components
ReactDOM.render(
    <MyComponent />,
    document.getElementById('app')
)