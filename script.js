const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.querySelector('.lightbox');
const closeBtn = document.querySelector('#close-btn');
const lightboxImage = document.getElementById('lightbox-image');

function closeLightbox() {
    lightbox.style.display = "none";
}

closeBtn.addEventListener('click', closeLightbox);

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        lightboxImage.src = item.srcset;
        lightboxImage.alt = item.alt;

        console.log(lightboxImage.src);
        
        lightbox.style.display = "flex";
    });
});