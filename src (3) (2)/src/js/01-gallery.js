import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

function createGalleryItem({ preview, original, description }) {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
          data-source="${original}"
        />
      </a>
    </li>
  `;
}

const galleryMarkup = galleryItems.map(createGalleryItem).join('');
gallery.insertAdjacentHTML('beforeend', galleryMarkup);

const lightbox = basicLightbox.create(
  `<div class="modal"><img src="" alt="" /></div>`,
  {
    onShow: (instance) => {
      document.addEventListener('keydown', onEscKeyPress);
      instance.element().querySelector('img').src = instance.source;
    },
    onClose: (instance) => {
      document.removeEventListener('keydown', onEscKeyPress);
      instance.element().querySelector('img').src = '';
    },
  }
);

function onGalleryItemClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') return;
  lightbox.source = event.target.dataset.source;
  lightbox.show();
}

function onEscKeyPress(event) {
  if (event.code === 'Escape') {
    lightbox.close();
  }
}

gallery.addEventListener('click', onGalleryItemClick);
