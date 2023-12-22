/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
// Frontend JavaScript
document.addEventListener('DOMContentLoaded', function () {
    // Fetch the daily crochet pattern from the server
    fetch('https://your-backend-api.com/daily-pattern')
      .then(response => response.json())
      .then(data => {
        // Update the HTML content with the fetched pattern details
        document.getElementById('pattern-image').src = data.imageURL;
        document.getElementById('pattern-name').innerText = data.name;
        document.getElementById('pattern-description').innerText = data.description;
  
        // Add a click event listener to the "View Pattern" button
        const viewPatternBtn = document.querySelector('.view-pattern-btn');
        viewPatternBtn.href = data.patternLink; // Set the link dynamically
        viewPatternBtn.addEventListener('click', function () {
          // The link will open in a new tab or window
          window.open(data.patternLink, '_blank');
        });
      })
      .catch(error => console.error('Error fetching daily pattern:', error));
  });

  function togglePatternInput() {
    var patternInputType = document.querySelector('input[name="patternInputType"]:checked').value;
    var textArea = document.getElementById('patternInput');
    var fileUpload = document.getElementById('patternFileInput');

    if (patternInputType === 'text') {
        textArea.style.display = 'block';
        fileUpload.style.display = 'none';
    } else {
        textArea.style.display = 'none';
        fileUpload.style.display = 'block';
    }
}
async function addPattern() {
    // Assume you have form data to send to the server (replace with actual form data)
    const formData = {
        patternName: document.getElementById('patternName').value,
        difficultyLevel: document.getElementById('difficultyLevel').value,
        // Add other form fields as needed
    };

    // Make a POST request to the server to add the pattern
    try {
        const response = await fetch('/api/add-pattern', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            // Successfully added the pattern, now update the patterns on the page
            updateAllPatterns();
            updateNewArrivals();
        } else {
            console.error('Failed to add pattern:', response.statusText);
        }
    } catch (error) {
        console.error('Error adding pattern:', error);
    }
}

async function updateAllPatterns() {
    // Fetch the updated list of all patterns from the server
    const response = await fetch('/api/all-patterns');
    const patterns = await response.json();

    // Update the DOM with the new patterns (replace 'patternsContainer' with the actual container ID)
    const patternsContainer = document.getElementById('allPatternsContainer');
    // Clear existing content
    patternsContainer.innerHTML = '';

    // Append each pattern to the container
    patterns.forEach(pattern => {
        const patternCard = createPatternCard(pattern);
        patternsContainer.appendChild(patternCard);
    });
}

async function updateNewArrivals() {
    // Fetch the updated list of new arrivals from the server
    const response = await fetch('/api/new-arrivals');
    const newArrivals = await response.json();

    // Update the DOM with the new arrivals (replace 'newArrivalsContainer' with the actual container ID)
    const newArrivalsContainer = document.getElementById('newArrivalsContainer');
    // Clear existing content
    newArrivalsContainer.innerHTML = '';

    // Append each new arrival to the container
    newArrivals.forEach(newArrival => {
        const newArrivalCard = createPatternCard(newArrival);
        newArrivalsContainer.appendChild(newArrivalCard);
    });
}

// Helper function to create a pattern card element
function createPatternCard(pattern) {
    const card = document.createElement('div');
    card.className = 'col mb-5';

    // Create the pattern card content (replace with your pattern data)
    // ...

    return card;
}