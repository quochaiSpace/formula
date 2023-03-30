import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage/HomePage';
import { Scrollbars } from 'react-custom-scrollbars';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Scrollbars style={{ width: '100%', height: '100vh' }}>
        <HomePage />
      </Scrollbars>
    </div>
  );
}

export default App;
