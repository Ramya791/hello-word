// var express = require('express');
// var app = express();

// app.get('/', function(req, res){
//   res.send('This is the homepage.');
// });

// app.get('/contact', function(req, res){
//   res.send('This is the contact page.');
// });

// app.get('/profile/:id', function(req, res){
//   res.send('You requested to see profile with id: ' + req.params.id);
// });

// app.listen(3000, () => {
//     console.log('Server running on port 3000');
// });


const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.get('/profile/:id', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'profile.html'));
});

// Start Express Server
app.listen(port, () => {
    console.log(`Express server running at http://127.0.0.1:${port}/`);
});
