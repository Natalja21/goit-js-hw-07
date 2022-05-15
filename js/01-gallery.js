import { galleryItems } from './gallery-items.js';


const galleryEl = document.querySelector('.gallery');

const makeGalleryMarkup = () => {
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

const onBasicLightboxOpen = (e) =>{
    e.preventDefault();

    if (e.target.nodeName === 'IMG') {
        const modalImg = basicLightbox
            .create(`<img src="${e.target.dataset.source}" alt="${e.target.alt}">`, {
                onShow: () => galleryEl.addEventListener('keydown', closeModalImg),
                onClose: () => galleryEl.removeEventListener('keydown', closeModalImg),
            }); 
        
        function closeModalImg(e) {
            if (e.key === 'Escape' && modalImg.visible()) {
                modalImg.close()
            }
        };

        modalImg.show();
    };     
};

galleryEl.addEventListener('click', onBasicLightboxOpen);