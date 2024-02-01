import React from 'react';
import JSONEditor from './JSONEditor';  // Import your JSONEditor component
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello World!!
        </p>
        {/* Render the JSONEditor component */}
        <JSONEditor />
      </header>
    </div>
  );
}

export default App;
