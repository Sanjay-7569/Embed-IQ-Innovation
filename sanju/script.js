// Dropdown menu interactivity for mobile
document.querySelectorAll('.dropbtn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const dropdown = this.parentElement.querySelector('.dropdown-content');
        if (dropdown.style.display === 'block') {
            dropdown.style.display = 'none';
        } else {
            dropdown.style.display = 'block';
        }
    });
});

// Close dropdown if clicked outside
window.onclick = function(event) {
    document.querySelectorAll('.dropdown-content').forEach(dc => {
        if (!event.target.matches('.dropbtn')) {
            dc.style.display = "none";
        }
    });
}

// Example search bar interactivity
document.querySelector('.search-bar').addEventListener('submit', function(e){
    e.preventDefault();
    const query = document.getElementById('searchInput').value.trim();
    if (query) {
        alert('Search for: ' + query);
        // Implement search logic or redirect here
    }
});

// Simple form validation and feedback
document.querySelector('.contact-form').addEventListener('submit', function(e){
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    this.reset();
});