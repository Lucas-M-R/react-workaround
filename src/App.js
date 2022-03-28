import logo from './logo.svg';
import './App.css';

function HelloReact(props) {
  return(<button>Hello {props.name}</button>)
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> c'est ouf and blah blah blah.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          
        </a>
        <HelloReact name="glahglah" />
      </header>
    </div>
  );
}

export default App;
