const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.querySelector('.lightbox');
const closeBtn = document.querySelector('#close-btn');
const lightboxImage = document.getElementById('lightbox-image');

function closeLightbox() {
    lightbox.style.display = "none";
}


// closing lightbox. first listener is for clicking out of image, second is for the button
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

closeBtn.addEventListener('click', closeLightbox);


// listener for opening lightbox
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        lightboxImage.src = item.srcset;
        lightboxImage.alt = item.alt;

        console.log(lightboxImage.src);
        
        lightbox.style.display = "flex";
    });
});