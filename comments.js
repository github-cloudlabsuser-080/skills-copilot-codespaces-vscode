// Create web server using Express.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Use body-parser to parse request bodies for POST requests
app.use(bodyParser.urlencoded({ extended: true }));

// Create a route to handle GET requests for the root URL (/)
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Create a route to handle GET requests for the /comments URL
app.get('/comments', (req, res) => {
    // Return a JSON response to the user
    res.json([
        {
            username: 'Todd',
            comment: 'LOL that is so funny!'
        },
        {
            username: 'Skyler',
            comment: 'I like to go birdwatching with my dog'
        },
        {
            username: 'Sk8erBoi',
            comment: 'Plz delete your account, Todd'
        },
        {
            username: 'onlysayswoof',
            comment: 'woof woof woof'
        }
    ]);
});

// Create a route to handle POST requests for the /comments URL
app.post('/comments', (req, res) => {
    // Log the username and comment to the console
    console.log(req.body.username);
    console.log(req.body.comment);
    // Push the comment to the array of comments
    comments.push(req.body);
    // Return a JSON response to the user
    res.json(comments);
});

// Start the server on port 3000
app.listen(port, () => {
    console.log('Server listening on http://localhost:' + port);
});

// Initialize array of comments
const comments = [
    {
        username: 'Todd',
        comment: 'LOL that is so funny!'
    },
    {
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd'
    },
    {
        username: 'onlysayswoof',
        comment: 'woof woof woof'
    }
];