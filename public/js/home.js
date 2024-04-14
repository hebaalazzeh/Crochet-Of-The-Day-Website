//NAVBAR
// Get all section titles and links
const sectionTitles = document.querySelectorAll('.section-title');
const navLinks = document.querySelectorAll('.link');

// Function to highlight the active section in the navbar
function highlightNavbarTitle() {
    // Get the current scroll position
    const scrollPosition = window.scrollY;

    // Iterate through each section title
    sectionTitles.forEach((title, index) => {
        // Get the position of the current section
        const sectionPosition = title.offsetTop;

        // Highlight the corresponding link in the navbar if the section is in view
        if (scrollPosition >= sectionPosition && scrollPosition < sectionPosition + title.offsetHeight) {
            navLinks[index].classList.add('active');
        } else {
            navLinks[index].classList.remove('active');
        }
    });
}

// Call the function when the page is scrolled
window.addEventListener('scroll', highlightNavbarTitle);






//HEADER
// Get the button element and the modal
var button = document.getElementById("crochet_of_the_day_button");
var modal = document.getElementById("crochet_of_the_day_modal");

// When the button is clicked, show the modal
button.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on the close button, close the modal
var closeBtn = document.getElementsByClassName("close")[0];
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//CAROUSEL





//PATTERNS
// Get filter button and menu

const filterButton = document.getElementById("filter-button");
const filterMenu = document.getElementById("filter-menu");

// Show/hide filter menu when button is clicked
filterButton.addEventListener("click", function() {
    filterMenu.style.display = filterMenu.style.display === "none" ? "block" : "none";
});

// Apply filters when "Apply Filter" button is clicked
document.getElementById("apply-filter").addEventListener("click", function() {
    // Get selected difficulty filters
    const difficultyFilters = Array.from(document.querySelectorAll("#difficulty-filter option:checked")).map(option => option.value);
    
    // Get selected additional filters
    const additionalFilters = Array.from(document.querySelectorAll("#additional-filter option:checked")).map(option => option.value);

    // Apply filters (you can implement your logic here)
    console.log("Difficulty Filters:", difficultyFilters);
    console.log("Additional Filters:", additionalFilters);
});
