import logo from './logo.svg';
import './App.css';
import { FirstComponent } from './components/FirstComponent';
import { SecondComponent } from './components/SecondComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This is a React review by Victor Robles</p>

        <FirstComponent></FirstComponent>
        <hr></hr>

        <SecondComponent></SecondComponent>

      </header>
    </div>
  );
}

export default App;
