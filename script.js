// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobile-nav-links');

    // Toggle mobile menu when hamburger is clicked
    hamburger.addEventListener('click', function() {
        mobileNav.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    const mobileNavLinks = mobileNav.getElementsByTagName('a');
    for (let i = 0; i < mobileNavLinks.length; i++) {
        mobileNavLinks[i].addEventListener('click', function() {
            mobileNav.classList.remove('active');
            hamburger.classList.remove('active');
        });
    }

    // Smooth scroll for all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!hamburger.contains(event.target) && !mobileNav.contains(event.target)) {
            mobileNav.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});



    
