import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';

const abject = {
  className:"App-link",
  href:"https://reactjs.org",
  target:"_blank",
  rel:"noopener noreferrer",
 message:"Hello papi"
};

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={abject.className}
          href={abject.href}
          target={abject.target}    
          rel={abject.rel}
        >
          {abject.message}
        </a>
        <Profile />
      </header>
    </div>
  );
}