import { BlobServiceClient } from '@azure/storage-blob';

const uploadFileToBlob = async (file) => {
  const connectionString = 'DefaultEndpointsProtocol=https;AccountName=matchanalyticscvtest;AccountKey=otrKdAPEaQYnPadYwe5mybWlcEIe68rE+MUbbkrFLr2dVfB+ttC3P4m/RcP+J5mb7T1xDexZcO7z+AStEmdLNg==;EndpointSuffix=core.windows.net';
  const containerName = 'testjson';
  const blobName = 'wannestest.json';
  
  const blobServiceClient = await BlobServiceClient.fromConnectionString(connectionString);
  const containerClient = blobServiceClient.getContainerClient(containerName);
  const blockBlobClient = containerClient.getBlockBlobClient(blobName);
  
  try {
    // Read the file content
    const fileContent = await readFileAsync(file);
  
    // Upload the file content to Azure Blob Storage
    await blockBlobClient.upload(fileContent, fileContent.length);
    console.log('File uploaded successfully to Azure Blob Storage!');
  } catch (error) {
    console.error('Error uploading file to Azure Blob Storage:', error.message);
    throw error;
  }
};
  
// Helper function to read file asynchronously
const readFileAsync = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      resolve(event.target.result);
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsArrayBuffer(file);
  });
};
  
export { uploadFileToBlob };