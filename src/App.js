import logo from './logo.svg';
import './App.css';

function App() {
const apiKey= process.env.REACT_APP_API_KEY

  return (
    <div className="App">
      <header className="App-header">
       {apiKey}
      </header>
    </div>
  );
}

export default App;
