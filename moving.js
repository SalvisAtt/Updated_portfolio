// Function to handle page navigation
function navigateToPage(url) {
    window.location.href = url;
}

// Add event listeners to each <ul> item
document.getElementById('projects').addEventListener('click', function() {
    navigateToPage('projects.html');
});

document.getElementById('about').addEventListener('click', function() {
    navigateToPage('about.html');
});

document.getElementById('resume').addEventListener('click', function() {
    navigateToPage('https://docs.google.com/document/d/1G5XeAc6qpj8SJD6b6GCyk7OgsJzjIfjiCJDHRRdSDjc/edit?usp=sharing');
});
