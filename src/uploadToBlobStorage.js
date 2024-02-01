import { BlobServiceClient } from '@azure/storage-blob';
// import fs from 'fs';

// // Load environment variables from .env file in development
// if (process.env.NODE_ENV !== 'production') {
//   require('dotenv').config();
// }

const uploadFileToBlob = async (filePath) => {
  const connectionString = 'DefaultEndpointsProtocol=https;AccountName=matchanalyticscvtest;AccountKey=otrKdAPEaQYnPadYwe5mybWlcEIe68rE+MUbbkrFLr2dVfB+ttC3P4m/RcP+J5mb7T1xDexZcO7z+AStEmdLNg==;EndpointSuffix=core.windows.net';
  const containerName = 'testjson';
  const blobName = 'wannestest.json';

  const blobServiceClient = await BlobServiceClient.fromConnectionString(connectionString);
  const containerClient = blobServiceClient.getContainerClient(containerName);
  const blockBlobClient = containerClient.getBlockBlobClient(blobName);

  try {
    // Read the file content
    const data = fs.readFileSync(filePath, 'utf-8');
    // Upload the file content to Azure Blob Storage
    await blockBlobClient.upload(data, data.length);
    console.log('File uploaded successfully to Azure Blob Storage!');
  } catch (error) {
    console.error('Error uploading file to Azure Blob Storage:', error.message);
    throw error;
  }
};

export { uploadFileToBlob };
