import { BlobServiceClient } from '@azure/storage-blob';

const uploadFileToBlob = async (file) => {
  const connectionString = ''; // Add your Azure Storage connection string
  const containerName = 'testjson';
  const blobName = 'wannestest.json';

  const blobServiceClient = await BlobServiceClient.fromConnectionString(connectionString);
  const containerClient = blobServiceClient.getContainerClient(containerName);
  const blockBlobClient = containerClient.getBlockBlobClient(blobName);

  try {
    // Read the file content as a Uint8Array
    const fileContent = await readFileAsync(file);

    // Upload the file content to Azure Blob Storage
    await blockBlobClient.upload(fileContent, fileContent.length);
    console.log('File uploaded successfully to Azure Blob Storage!');
  } catch (error) {
    console.error('Error uploading file to Azure Blob Storage:', error.message);
    throw error;
  }
};

// Helper function to read file asynchronously and convert to Uint8Array
const readFileAsync = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      // Convert the result to Uint8Array
      const arrayBuffer = event.target.result;
      const uint8Array = new Uint8Array(arrayBuffer);
      resolve(uint8Array);
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsArrayBuffer(file);
  });
};

export { uploadFileToBlob };
