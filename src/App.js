import React from 'react';
import JSONEditor from './JSONEditor';  // Import your JSONEditor component
import './App.css';
import MyComponent from './MyComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <JSONEditor />
        <MyComponent />
      </header>
    </div>
  );
}

export default App;
