// Inside your home.js file
document.addEventListener("DOMContentLoaded", function () {
    const patterns = [
        {
            title: "Sunday Pattern",
            image: "pattern1.jpg",
            description: "Description of Sunday Pattern."
        },
        {
            title: "Monday Pattern",
            image: "pattern2.jpg",
            description: "Description of Monday Pattern."
        },
        // Add more patterns for each day of the week
    ];

    const currentDay = new Date().getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const currentPattern = patterns[currentDay];

    const patternContainer = document.getElementById("pattern-container");
    const patternImage = document.createElement("img");
    patternImage.src = currentPattern.image;
    patternImage.alt = currentPattern.title;

    const patternTitle = document.createElement("h2");
    patternTitle.textContent = currentPattern.title;

    const patternDescription = document.createElement("p");
    patternDescription.textContent = currentPattern.description;

    patternContainer.appendChild(patternImage);
    patternContainer.appendChild(patternTitle);
    patternContainer.appendChild(patternDescription);
});
