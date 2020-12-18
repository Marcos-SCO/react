import './App.css';
import Basket from './components/Basket';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <>
        <Main/>
        <Basket/>
      </>
    </div>
  );
}

export default App;
