import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MyLoader from './components/Loader'

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2500)
  })

  return (
    <div className="App">
      {loading ?
        <header className="App-header">
          <img src={logo} className="App-logo-loader" alt="logo" />
        </header> :
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>}
    </div>
  );
}

export default App;
