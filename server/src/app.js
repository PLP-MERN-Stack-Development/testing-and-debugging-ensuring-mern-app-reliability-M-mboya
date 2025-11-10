

import express from 'express';
const app = express();

// ✅ Add this root route for the test
app.get('/', (req, res) => {
  res.status(200).send('Server is running successfully');
});

export default app;
