import { galleryItems } from './gallery-items.js';
// Change code below this line

// ссылка на родителя
const refsGalleryContainer = document.querySelector('.gallery')

// готовая разметка
const gallerySet = createGallery(galleryItems)

//фун. разметки галереи
function createGallery(arr) {
const newArr = arr.map(el => `<a class="gallery__item" href="${el.original}">
    <img class="gallery__image lazyload blur-up" data-src="${el.preview}" alt="${el.description}"  />
</a>`).join('')

    return newArr
}

// вставка разметки в html
refsGalleryContainer.innerHTML = gallerySet

// инициализация библиотеки 
let gallery = new SimpleLightbox('.gallery a', {captionsData :'alt', captionDelay: 250});
