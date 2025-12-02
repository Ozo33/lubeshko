const scrollTopBtn = document.getElementById('scrollBtn');
if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 1000) {
            scrollTopBtn.classList.add('show');
            scrollTopBtn.classList.remove('hide');
        } else {
            scrollTopBtn.classList.add('hide');
            setTimeout(() => scrollTopBtn.classList.remove('show'), 300);
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}