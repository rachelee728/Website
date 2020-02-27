import React from 'react';
import logo from '/Users/rachelee/hello-world/src/profilephoto.JPG';
import './App.css';
import Resizer from 'react-image-file-resizer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="Profile-Photo" alt="Profile Photo" />
       
        <p>
          Hello! My name is Rachel and I am a sophomore at the University of Virginia studying Computer Science!    
          Some things that I'm interested in include web development, self-driving cars, and cryptocurrency. 
          I also love exploring food, travelling, and running!
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/rachel-lee728/"
          target="_blank"
          rel="noopener noreferrer"       
        >
          LinkedIn profile
        </a>
      </header>
    </div>
  );
}


export default App;
