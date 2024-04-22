document.addEventListener('DOMContentLoaded', function() {
    var currentPage = window.location.pathname;
    var navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
        if (link.href.includes(currentPage)) {
            link.classList.add('active');
        }
    });
document.querySelector('.hamburger').addEventListener('click', function() {
 document.getElementById('nav').classList.toggle('active');
});
});



