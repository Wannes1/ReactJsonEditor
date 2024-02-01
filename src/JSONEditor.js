import React, { useState } from 'react';

const JSONEditor = () => {
  const [jsonData, setJsonData] = useState({});
  const [fileInput, setFileInput] = useState(null);

  const loadJSONFile = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const parsedData = JSON.parse(event.target.result);
        setJsonData(parsedData);
      };
      reader.readAsText(file);
    }
  };

  const handleInputChange = (key, value) => {
    setJsonData((prevData) => ({ ...prevData, [key]: value }));
  };

  const saveChanges = () => {
    // Implement your logic to save changes, e.g., send updated JSON to server
    console.log('Changes saved!', jsonData);
  };

  return (
    <div>
      <h2>JSON Editor</h2>

      <div>
        {Object.keys(jsonData).map((key) => (
          <div key={key}>
            <label>{key}</label>
            <input
              type="text"
              value={jsonData[key]}
              onChange={(e) => handleInputChange(key, e.target.value)}
            />
          </div>
        ))}
      </div>

      <button onClick={saveChanges}>Save Changes</button>

      <input type="file" accept=".json" onChange={(e) => loadJSONFile(e)} />
    </div>
  );
};

export default JSONEditor;