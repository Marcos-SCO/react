// property propagation
const NameContext = React.createContext('name'); // chain of components

function MyComponent1() {
  const name = 'Marcos dos Santos Carvalho';
  return /*#__PURE__*/React.createElement("div", {
    className: "component-1"
  }, /*#__PURE__*/React.createElement(MyComponent2, null, /*#__PURE__*/React.createElement(MyComponent3, null)));
}

function MyComponent2(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "component-2"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("header", null, props.children), /*#__PURE__*/React.createElement("footer", null)));
}

function MyComponent3() {
  const [tel, setTel] = React.useState('1143825357');
  setTimeout(() => {
    setTel('944448798');
  }, 1550);
  return /*#__PURE__*/React.createElement("div", {
    className: "component-3"
  }, /*#__PURE__*/React.createElement(MyComponent4, {
    tel: tel
  }));
}

function MyComponent4(props) {
  const [age, setAge] = React.useState(22);
  setTimeout(() => {
    setAge(23);
  }, 1000);
  return /*#__PURE__*/React.createElement("div", {
    className: "component-4"
  }, /*#__PURE__*/React.createElement("p", null, "Age: ", age), /*#__PURE__*/React.createElement("p", null, "Tel - ", props.tel));
}

function MyComponent() {
  return /*#__PURE__*/React.createElement("div", {
    id: "components"
  }, /*#__PURE__*/React.createElement(MyComponent1, null));
} // unchain components


ReactDOM.render( /*#__PURE__*/React.createElement(MyComponent, null), document.getElementById('app'));
