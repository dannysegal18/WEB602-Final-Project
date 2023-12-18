const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const port = 3000;

// MongoDB connection string
const uri = 'your_mongodb_connection_string';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Serve HTML files
app.use(express.static('public')); // Assuming HTML files are in a 'public' folder

// Example API endpoint to fetch data from MongoDB
app.get('/api/data', async (req, res) => {
  try {
    await client.connect();
    const database = client.db('your_database_name');
    const collection = database.collection('your_collection_name');
    const data = await collection.find({}).toArray();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await client.close();
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});