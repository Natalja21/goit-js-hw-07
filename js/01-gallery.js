import { galleryItems } from './gallery-items.js';


const galleryEl = document.querySelector('.gallery');

function makeGalleryMarkup() {
    const markup = galleryItems
        .map(({ preview, original, description }) =>
            `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}">
            </a>
        </div>`
        )
        .join('');

    galleryEl.innerHTML = markup;
};

makeGalleryMarkup();

galleryEl.addEventListener('click', onBasicLightboxOpen);

function onBasicLightboxOpen(e) {
    if (e.target.nodeName !== 'IMG') {
        return;
    };

    e.preventDefault();

    const modalImg = basicLightbox
        .create(`<img src="${e.target.dataset.source}" alt="${e.target.alt}">`);

    modalImg.show();

    window.addEventListener('keydown', e => {
        if (e.code === 'Escape' && modalImg.visible()) {
            modalImg.close();
        }
    });
};