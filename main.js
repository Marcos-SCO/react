// property propagation
const NameContext = React.createContext('name');

// chain of components
function MyComponent1() {
    const name = 'Marcos dos Santos Carvalho';
    return (
        <div className="component-1">
            <MyComponent2>
                <MyComponent4 name={name} />
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
    return (
        <div className="component-3">
            <MyComponent4 />
        </div>
    )
}

function MyComponent4(props) {
    return (
        <div className="component-4">
            <p>{'4th component with prop name: ' + props.name}</p>
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