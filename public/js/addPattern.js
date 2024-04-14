document.getElementById('pattern_description_toggle').addEventListener('change', function() {
    var textInput = document.querySelector('.pattern-description-text');
    var fileInput = document.querySelector('.pattern-description-file');
    if (this.checked) {
        textInput.style.display = 'block';
        fileInput.style.display = 'none';
    } else {
        textInput.style.display = 'none';
        fileInput.style.display = 'block';
    }
});