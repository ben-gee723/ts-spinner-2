import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ImgLoader from './components/ImgLoader';
import Loader from './components/Loader';

// Not working
// import LoaderReactImage from './components/LoaderReactImage';

// Import outr loader
import LoaderNice from './components/LoaderNice';

// Import the image
import loadingCircles from './loadingCircles.svg';

function App() {

  // useState to give the loader information
  const [isLoading, setIsLoading] = useState(true);

  // We set the loading time with useEffect
  useEffect(() => {
    // set the time out to change the useState of isLoading
    setTimeout(() => {
      setIsLoading(false);

      // Time is set in milli seconds
    }, 2500)
  })

  return (
    <div className="App">
      {/* Check if the loading is true */}
      {/* Tenary to determine if Loading is true
      --> loading ? true result      : false result;, as such
      --> loading ? <LoaderElemnent/>: <MainBody/> */}

      {isLoading ?
        <header className="App-header">
          <LoaderNice />
          <ImgLoader src={loadingCircles} />
          <ImgLoader src={logo} />
          <Loader />
          {/* <img src={logo} className="App-logo-loader" alt="logo" /> */}
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
