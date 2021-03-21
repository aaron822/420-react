import logo from '../images/logo.svg';
import '../App.css';

export default function About() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>About Me </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn More</a>
      </header>
    </div>
  );
}

 