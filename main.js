// property propagation
const NameContext = React.createContext('name');

// chain of components
function MyComponent1() {
    const name = 'Marcos dos Santos Carvalho';
    return (
        <NameContext.Provider value={name}>
            <div className="component-1">
                <MyComponent2 />
            </div>
        </NameContext.Provider>
    )
}

function MyComponent2() {
    return (
        <div className="component-2">
            <MyComponent3 />
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

function MyComponent4() {
    return (
        <NameContext.Consumer>
            {(name) => (
                <div className="component-4">
                    <p>{'4th component with prop name: ' + name}</p>
                </div>
            )}
        </NameContext.Consumer>
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