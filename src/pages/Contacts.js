import logo from '../images/logo.svg';
import '../App.css';

export default function Contacts() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Contact Me</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Contact Info</a>
      </header>
    </div>
  );
}

 