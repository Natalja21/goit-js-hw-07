import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');

function makeGalleryMarkup() {
    const markup = galleryItems
        .map(({ preview, original, description }) =>
            `<a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}">
        </a>`
        )
        .join('');
    galleryEl.innerHTML = markup;
};

makeGalleryMarkup();

const lightbox = new SimpleLightbox('.gallery__item', { captionsData: 'alt', captionDelay: 250 });
