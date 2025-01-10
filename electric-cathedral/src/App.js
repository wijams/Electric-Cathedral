import './App.css';
import Home from './Home.js';

function App() {
  return (
    <div className="">
      <header className="">
        <div className="navbar">
          <h1 className="header">The Electric Cathedral</h1>
          <a className="active">Home</a>
          <a>About</a>
          <a>News</a>
          <a>Music</a>
        </div>
      </header>
      <Home/>
    </div>
  );
}

export default App;
