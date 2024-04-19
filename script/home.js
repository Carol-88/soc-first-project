//link activo
document.addEventListener('DOMContentLoaded', function() {
    var currentPage = window.location.pathname;
    var navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
        if (link.href.includes(currentPage)) {
            link.classList.add('active');
        }
    });
});