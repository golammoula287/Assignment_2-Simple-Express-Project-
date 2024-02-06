
// Import necessary modules
const http = require('http');
const fs = require('fs');
const url = require('url');
const multer  = require('multer');

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Log a message when the server starts listening on port 5500
    console.log('Server is listening on port 5500');

    // Parse the request URL
    const parsedUrl = url.parse(req.url, true);

    // Handle different routes
    if (parsedUrl.pathname === '/') {
        // If requested URL is "/"
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('This is Home Page');
        res.end();
    } else if (parsedUrl.pathname === '/about') {
        // If requested URL is "/about"
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('This is About Page');
        res.end();
    } else if (parsedUrl.pathname === '/contact') {
        // If requested URL is "/contact"
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('This is Contact Page');
        res.end();
    } else if (parsedUrl.pathname === '/file-write') {
        // If requested URL is "/file-write"
        fs.writeFile('demo.txt', 'hello world', (err) => {
            if (err) throw err;
            console.log('File "demo.txt" has been created and text has been written.');
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write('File "demo.txt" has been created and text has been written.');
            res.end();
        });
    } else {
        // If requested URL is not found
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.write('404 Not Found');
        res.end();
    }
});

// Multer setup for file upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

// POST route to handle file upload
server.post('/upload', upload.single('file'), (req, res) => {
    res.send('File uploaded successfully');
});

// Listen on port 5500
server.listen(5500);


const app = require('./app');

const PORT = process.env.PORT || 5500;


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


