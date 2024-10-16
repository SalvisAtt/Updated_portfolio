// Function to handle page navigation
function navigateToPage(url) {
    window.location.href = url;
}

// Add event listeners to each <ul> item
document.getElementById('home').addEventListener('click', function() {
    navigateToPage('index.html');
});
document.getElementById('projects').addEventListener('click', function() {
    navigateToPage('project.html');
});
document.getElementById('about').addEventListener('click', function() {
    navigateToPage('about.html');
});
document.getElementById('resume').addEventListener('click', function() {
    navigateToPage('https://docs.google.com/document/d/1G5XeAc6qpj8SJD6b6GCyk7OgsJzjIfjiCJDHRRdSDjc/edit?usp=sharing');
});
document.getElementById('about1').addEventListener('click', function() {
    navigateToPage('about.html');
});

document.getElementById('projects1').addEventListener('click', function() {
    navigateToPage('project.html');
});
document.getElementById('projects2').addEventListener('click', function() {
    navigateToPage('project.html');
});
document.getElementById('projects3').addEventListener('click', function() {
    navigateToPage('project.html');
});
