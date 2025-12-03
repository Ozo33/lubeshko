const scrollTopBtn = document.getElementById('scrollTopBtn');
if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 700) {
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

const openModal = document.getElementById("openModal");
const modalOverlay = document.getElementById("modalOverlay");
const closeModal = document.getElementById("closeModal");

openModal.addEventListener("click", () => {
    modalOverlay.style.display = "flex";
});

closeModal.addEventListener("click", () => {
    modalOverlay.style.display = "none";
});

modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.style.display = "none";
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        modalOverlay.style.display = "none";
    }

});
