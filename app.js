const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Define the directory where your HTML files are stored
const publicDirectory = path.join(__dirname, 'public');

// Serve static files from the 'public' directory
app.use(express.static(publicDirectory));

// Define routes for each HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(publicDirectory, 'index.html'));
});

app.get('/page1', (req, res) => {
  res.sendFile(path.join(publicDirectory, 'blogs.html'));
});

app.get('/page2', (req, res) => {
  res.sendFile(path.join(publicDirectory, 'form.html'));
});

app.get('/page3', (req, res) => {
    res.sendFile(path.join(publicDirectory, 'login.html'));
  });

  app.get('/page4', (req, res) => {
    res.sendFile(path.join(publicDirectory, 'products.html'));
  });

  app.get('/page5', (req, res) => {
    res.sendFile(path.join(publicDirectory, 'provide.html'));
  });

  app.get('/page6', (req, res) => {
    res.sendFile(path.join(publicDirectory, 'signup.html'));
  });
  

// Add more routes as needed

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});