// Load environment variables from .env file in development
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }

const { BlobServiceClient } = require('@azure/storage-blob');
const fs = require('fs');

// Update these variables with your Azure Storage account information
const connectionString = process.env.AZURE_STORAGE_CONNECTION_STRING;
const containerName = 'testjson';
const blobName = 'wannestest.json';

// Path to your local JSON file
const localFilePath = "C:\Users\hermawa\OneDrive - Cronos\Bureaublad\wannes.json";

async function uploadFileToBlob() {
  const blobServiceClient = await BlobServiceClient.fromConnectionString(connectionString);
  const containerClient = blobServiceClient.getContainerClient(containerName);
  const blockBlobClient = containerClient.getBlockBlobClient(blobName);

  try {
    const data = fs.readFileSync(localFilePath, 'utf-8');
    await blockBlobClient.upload(data, data.length);
    console.log('File uploaded successfully to Azure Blob Storage!');
  } catch (error) {
    console.error('Error uploading file:', error.message);
  }
}

uploadFileToBlob();
