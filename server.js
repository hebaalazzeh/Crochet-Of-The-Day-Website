const express = require('express');
const path = require('path');
const fileupload = require('express-fileupload');
const cors = require('cors'); // Import the cors package

let initial_path = path.join(__dirname, "public");

const app = express();
app.use(cors()); // Use the cors middleware
app.use(express.static(initial_path));
app.use(fileupload());

// Define your routes
app.get('/', (req, res) => {
    res.sendFile(path.join(initial_path, "home.html"));
})

app.get('/editor', (req, res) => {
    res.sendFile(path.join(initial_path, "editor.html"));
})

const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');
const app = express();

// Middleware for parsing multipart/form-data
app.use(fileUpload());

// Define the route for handling file uploads
app.post('/upload', (req, res) => {
    // Check if any files were uploaded
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    
    // Get the uploaded image file from the request (using the correct field name 'bannerImage')
    let bannerImage = req.files.bannerImage;

    // Generate a unique filename for the uploaded image
    let date = new Date();
    let imageName = date.getTime() + '-' + bannerImage.name;

    // Specify the path where the uploaded image will be saved
    let uploadPath = path.join(__dirname, 'public', 'uploads', imageName);

    // Move the uploaded image to the specified path
    bannerImage.mv(uploadPath, (err) => {
        if (err) {
            return res.status(500).send(err);
        }

        // If the image was uploaded successfully, send a JSON response with the image path
        res.json({ imagePath: `/uploads/${imageName}` });
    });
});


app.get("/:blog", (req, res) => {
    res.sendFile(path.join(initial_path, "blog.html"));
})

app.use((req, res) => {
    res.json("404");
})

app.listen("3000", () => {
    console.log('listening......');
})