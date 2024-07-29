

document.addEventListener('DOMContentLoaded', function () {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const close = document.querySelector('.close');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    
    let currentIndex = 0;

    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function () {
            currentIndex = index;
            lightboxImage.src = this.src;
            lightbox.style.display = 'flex';
        });
    });

    close.addEventListener('click', function () {
        lightbox.style.display = 'none';
    });

    prev.addEventListener('click', function () {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : galleryItems.length - 1;
        lightboxImage.src = galleryItems[currentIndex].src;
    });

    next.addEventListener('click', function () {
        currentIndex = (currentIndex < galleryItems.length - 1) ? currentIndex + 1 : 0;
        lightboxImage.src = galleryItems[currentIndex].src;
    });

    lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});
