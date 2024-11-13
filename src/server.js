import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';  // Import CORS

// Get the current directory name using import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 5004
;

// Use CORS middleware
app.use(cors());  // Enable CORS for all requests

// Serve the JSON file at a specific endpoint
app.get('/data', (req, res) => {
  const filePath = path.join(__dirname, 'cluster_0_data.json');
  console.log('File path:', filePath);  // Log the file path to check if it’s correct
  res.sendFile(filePath);
});


// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
