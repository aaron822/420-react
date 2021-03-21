import logo from '../images/logo.svg';
import '../App.css';

export default function Projects() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>My Projects</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Projects Link</a>
      </header>
    </div>
  );
}

 