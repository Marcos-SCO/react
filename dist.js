// property propagation
const NameContext = React.createContext('name'); // chain of components

function MyComponent1(props) {
  const name = 'Marcos dos Santos Carvalho';
  return /*#__PURE__*/React.createElement("div", {
    className: "component-1"
  }, /*#__PURE__*/React.createElement(MyComponent2, null, /*#__PURE__*/React.createElement(MyComponent3, {
    clickInc: props.clickInc
  })));
}

function MyComponent2(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "component-2"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("header", null, props.children), /*#__PURE__*/React.createElement("footer", null)));
}

function MyComponent3(props) {
  const [tel, setTel] = React.useState('1143825357');
  setTimeout(() => {
    setTel('944448798');
  }, 1550);
  return /*#__PURE__*/React.createElement("div", {
    className: "component-3"
  }, /*#__PURE__*/React.createElement(MyComponent4, {
    tel: tel,
    clickInc: props.clickInc
  }));
}

function MyComponent4(props) {
  const [age, setAge] = React.useState(22);
  setTimeout(() => {
    setAge(23);
  }, 1000);
  return /*#__PURE__*/React.createElement("div", {
    className: "component-4"
  }, /*#__PURE__*/React.createElement("p", null, "Age: ", age), /*#__PURE__*/React.createElement("p", null, "Tel - ", props.tel), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: props.clickInc
  }, "Increment"));
}

function MyComponent(props) {
  return /*#__PURE__*/React.createElement("div", {
    id: "components"
  }, /*#__PURE__*/React.createElement(MyComponent1, {
    clickInc: props.clickInc
  }));
}

function MyBrotherComponent(props) {
  return /*#__PURE__*/React.createElement("div", {
    id: "brother-component"
  }, /*#__PURE__*/React.createElement(MyBrotherComponent2, {
    count: props.count
  }));
}

function MyBrotherComponent2(props) {
  React.useEffect(function () {
    localStorage.setItem('count', props.count);
  });
  return /*#__PURE__*/React.createElement("h2", null, "Counter: ", props.count);
}

function AppComponent() {
  const [count, incCount] = React.useState(parseInt(localStorage.getItem('count')) || 0);

  const clickInc = () => {
    incCount(count + 1);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MyComponent, {
    clickInc: clickInc
  }), /*#__PURE__*/React.createElement(MyBrotherComponent, {
    count: count
  }));
} // unchain components


ReactDOM.render( /*#__PURE__*/React.createElement(AppComponent, null), document.getElementById('app'));
