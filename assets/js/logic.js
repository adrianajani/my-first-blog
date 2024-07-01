// Make sure the HTML file contains elements with IDs 'toggle-mode' and 'back-button'
document.getElementById('toggle-mode').addEventListener('click', toggleMode);

function toggleMode() {
    document.body.classList.toggle('dark-mode');
}



document.getElementById('back-button').addEventListener('click', function() {
    window.location.href = 'index.html';
});
