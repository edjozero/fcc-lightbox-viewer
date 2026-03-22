const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.querySelector('.lightbox');
const closeBtn = document.querySelector('.close-btn');

function closeLightbox() {
    lightbox.style.display = "none";
}

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        lightbox.style.display = "flex";
    });
});