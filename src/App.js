import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Projects from './pages/Projects.js';
import Contacts from './pages/Contacts.js'; 
import './App.css';

export default function App() {
  return (
    <Router>
      <div>
        <nav class="flex flex-vertical-center">
          <div class= "navbar flex flex-horizontal-center">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
          </div>
        </nav>
        <main>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contacts">
              <Contacts />
            </Route>
            <Route path="/">
              <Home /> 
            </Route>
          </Switch>
        </main>

        <footer>
          &copy; 2021
        </footer>
      </div>
    </Router>
  );
}

