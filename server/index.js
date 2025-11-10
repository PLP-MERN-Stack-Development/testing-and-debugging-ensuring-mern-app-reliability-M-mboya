import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Server is running successfully');
});

// Start server
const server = app.listen(5000, () => console.log('Server running on port 5000'));

// Export the server so Jest can close it after tests
export default server;
