import React from 'react';
import { uploadFileToBlob } from './YourFile';  // Import the function

const MyComponent = () => {
  const handleSaveToBlob = async () => {
    // Call the uploadFileToBlob function
    try {
      await uploadFileToBlob();
      console.log('File uploaded to Blob Storage successfully!');
    } catch (error) {
      console.error('Error uploading file to Blob Storage:', error.message);
    }
  };

  return (
    <div>
      {/* Your other components and UI elements */}
      <button onClick={handleSaveToBlob}>Save to Blob</button>
    </div>
  );
};

export default MyComponent;